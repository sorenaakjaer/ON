// Set loaded div
$('.triggers').html($('.triggers').html() + '<div class="v_js_loaded"></div>');

$(document).trigger('TRIGGER_AFTER_LOGIN')

// STEP 1 - TRIGGER TRIGGER_AFTER_LOGIN - START  //
$(document).one("TRIGGER_AFTER_LOGIN", function () {
	console.log('TRIGGER_AFTER_LOGIN')
	observe_o_page_loaded()

	function observe_o_page_loaded() {
		const el = $('#o-app')
		if (!el || el.length === 0) {
			console.warn('No element found with selector');
			return;
		}
		let cInterval = setInterval(_ => {
			const html = el.html()
			if (html.length > 3) {
				clearInterval(cInterval)
				$(document).trigger('trigger::o_page_loaded')
			} else {
				console.log('observer::empty')
			}
		}, 1000)
	}

})
// TRIGGER TRIGGER_AFTER_LOGIN - END //

//STEP 2 - TRIGGER trigger::o_page_loaded - START //
$(document).one("trigger::o_page_loaded", function () {
	//console.log('trigger::o_page_loaded')	
	console.log('Login cuStomer', $(".LOGIN_CUSTOMER_TYPE > input").val())
	$.getScript("https://cdn.jsdelivr.net/npm/vue@2", function (e, t, s) {
		$(document).trigger("trigger::vue_loaded")
	})
});
// TRIGGER trigger::o_page_loaded - END //
$(document).one("trigger::vue_loaded", function () {

	Vue.directive('autosize', {
		inserted(el) {
			el.style.overflowY = 'hidden';
			el.style.resize = 'none'; // Prevent manual resizing
			el.addEventListener('input', () => {
				el.style.height = 'auto';
				el.style.height = el.scrollHeight + 'px';
			});
			// Initialize size on load
			el.style.height = 'auto';
			el.style.height = el.scrollHeight + 'px';
		},
		componentUpdated(el) {
			// Adjust height whenever component updates
			el.style.height = 'auto';
			el.style.height = el.scrollHeight + 'px';
		}
	});



	Vue.component('o-tickets', {
		template: '#o-tickets-template',
		props: {
			tickets: {
				type: Array,
				default: () => []
			},
			search_query: {
				type: String,
				default: ''
			},
			i18n: {
				type: Object,
				default: null
			},
			saving_states: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				noteInputs: {},
				showNotes: {}
			}
		},
		computed: {
			ticketsVProps() {
				const valuesToShow = ['type', 'description', 'serviceSubscriptionId', 'address', 'contactName', 'contactNumber', 'contactEmail'];

				return this.tickets.map(ticket => ({
					...ticket,
					v_props: valuesToShow.reduce((props, propName) => {
						if (ticket.hasOwnProperty(propName)) {
							// Use i18nHash for property names if available
							const displayName = this.i18n[propName] || propName;
							props[displayName] = ticket[propName];
						}
						return props;
					}, {}),
					v_lastUpdated: ticket.lastUpdated ? this.formatDateTime(ticket.lastUpdated) : '',
					v_notes: ticket.notes ? ticket.notes
						.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) // Sort notes by timestamp, newest first
						.map(note => ({
							...note,
							v_timestamp: this.formatDateTime(note.timestamp) // Assuming formatDateTime is defined and formats correctly
						})) : []
				}));
			},
			filteredTickets() {
				if (!this.search_query.trim()) {
					return this.ticketsVProps;
				}
				const searchLower = this.search_query.toLowerCase();

				const searchInObject = (obj) => {
					return Object.values(obj).some(value => {
						// Check if the value is an object and not null, then recursively search
						if (typeof value === 'object' && value !== null) {
							return searchInObject(value);
						} else if (Array.isArray(value)) {
							// If the value is an array, search within each element
							return value.some(element => searchInObject(element));
						} else {
							// Check for null before calling toString to avoid TypeError
							return value !== null && value.toString().toLowerCase().includes(searchLower);
						}
					});
				};
				return this.ticketsVProps.filter(ticket => searchInObject(ticket));
			}
		},
		methods: {
			formatDateTime(dateString) {
				let locale = 'en-US', hour12 = true;
				const i18nTime = this.locale === 'da' ? 'kl.' : 'at';

				if (this.locale === 'da') {
					locale = 'da-DK';
					hour12 = false;
				}

				const date = new Date(dateString);
				const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
				const timeOptions = { hour: '2-digit', minute: '2-digit', hour12 };

				const formattedDate = date.toLocaleDateString(locale, dateOptions);
				const formattedTime = date.toLocaleTimeString(locale, timeOptions);

				const specificReadableDateTime = `${formattedDate} ${i18nTime} ${formattedTime}`;

				return specificReadableDateTime;
			},
			setShowNotes(ticketId) {
				console.log('show notes', ticketId)
				if (!this.showNotes[ticketId]) {
					this.$set(this.showNotes, ticketId, true);
				} else {
					this.$delete(this.showNotes, ticketId)
				}
			},
			getShowNotes(ticketId) {
				console.log('getShowNotes', this.showNotes)
				return this.showNotes[ticketId];
			},
			getIsSaving(ticketId) {
				return !!this.saving_states[ticketId]; // Convert to boolean
			},
			saveNote(ticketId) {
				const note = this.noteInputs[ticketId];
				if (!note || note.length === 0) {
					const el = document.querySelector('#ticket_' + ticketId + ' textarea')
					if (el) {
						el.focus()
					}
					return
				}
				const noteObj = {
					note: note,
					ticketId: ticketId
				}
				this.$emit('save_note', noteObj)
				this.$delete(this.noteInputs, ticketId);
			}
		}
	})

	Vue.component('o-multi-select', {
		template: '#o-multi-select-template',
		props: {
			items: {
				type: Array,
				default: () => []
			},
			canUnselectSelectedItem: {
				type: Boolean,
				default: false,
			},
			selected_item: {
				type: Object,
				default: () => null
			},
			i18n: {
				type: Object,
				default: () => null
			}
		},
		data() {
			return {
				isOpen: false
			}
		},
		computed: {
			selectTitle() {
				if (!this.selected_item) {
					return 'Vælg...'
				}
				const idx = this.items.findIndex(item => item.value === this.selected_item)
				return idx > -1 ? this.items[idx]['title'] : ''
			},
			filteredItems() {
				if (!this.searchable) {
					return this.items
				}
			}
		},
		methods: {
			setIsOpen(bool) {
				this.isOpen = bool
			},
			toggleItem(item) {
				this.$emit('toggle_item', item)
				this.setIsOpen(false)
			},
			onMultiSelectBGClick() {
				this.setIsOpen(false)
				this.$emit('close')
			}
		}
	})

	new Vue({
		el: "#o-app",
		data() {
			return {
				menuItems: [
					{ key: 'welcome', title: 'Velkommen' },
					{ key: 'search', title: 'Søgning' },
					{ key: 'notes', title: 'Se tidligere noter' },
				],
				theActiveMenuItem: 'welcome',
				searchQuery: '',
				savedSearchQuery: '',
				theActiveAccItem: 0,
				accItems: [
					{ id: 0, title: 'Kaldstyper', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us' },
					{ id: 1, title: 'Søgning', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which ' },
					{ id: 2, title: 'Visiteringsguide', content: 'ctetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, w' },
				],
				isSearching: false,
				i18nArr: [],
				tickets: [],
				isLoadingTickets: false,
				savingStates: {},
				theDropdownFilters: [
					{ value: 7, title: 'Seneste 7 dage' },
					{ value: 14, title: 'Seneste 14 dage' },
					{ value: 21, title: 'Seneste 21 dage' },
					{ value: 30, title: 'Seneste 30 dage' }
				],
				theSelectedFilter: 7,
				earlierTickets: [],
				isLoadingEarlierTickets: false,
				uxSearchQuery: '',
				toast: {
					visible: false,
					message: '',
					type: 'info', // 'success', 'info', 'warning', 'error'
				}
			}
		},
		computed: {
			locale() {
				return 'da'
			},
			userKey() {
				return eTrayWebportal && eTrayWebportal.User.Key ? eTrayWebportal.User.Key : null
			},
			i18n() {
				const hash = {};
				this.i18nArr.forEach(item => {
					hash[item.api_value] = item.display_value;
				});
				return hash;
			}
		},
		methods: {
			showToast(message, type = 'info') {
				this.toast.message = message;
				this.toast.type = type;
				this.toast.visible = true;

				setTimeout(() => {
					this.toast.visible = false;
				}, 2500); // Hide after 3 seconds
			},
			onToggleFilter(filter) {
				this.theSelectedFilter = filter
				this.fetchEarlierTickets()
			},
			resetTickets() {
				this.tickets = []
			},
			saveNote(noteObj) {
				const note = noteObj.note
				const ticketId = noteObj.ticketId
				this.$set(this.savingStates, ticketId, true);
				this.addNoteToTicket(ticketId, note)
			},
			async addNoteToTicket(ticketId, noteContent) {
				const apiUrl = 'http://test-portal.opennet.dk/ppServices/api/dc/addnote';
				const userKey = this.userKey

				const headers = new Headers({
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'PP_USER_KEY': userKey
				});

				// Prepare the request body
				const body = JSON.stringify({
					ticketId: ticketId,
					note: noteContent,
				});

				try {
					const response = await fetch(apiUrl, {
						method: 'POST',
						headers: headers,
						body: body,
					});

					if (!response.ok) {
						this.$delete(this.savingStates, ticketId);
						throw new Error(`HTTP error! status: ${response.status}`);
					}

					const result = await response.json();
					console.log('Note added successfully:', result);
					this.showToast('Noten er gemt!', 'success');
					this.$delete(this.savingStates, ticketId);
					// Handle success response
				} catch (error) {
					this.$delete(this.savingStates, ticketId);
					this.showToast('Noget gik galt', 'info');
					console.error('Error adding note:', error);
					// Handle errors
				}
			},
			onSearch() {
				if (this.searchQuery.length < 1) {
					this.$refs.v_search_query.focus()
					return
				}
				this.savedSearchQuery = this.searchQuery
				if (this.theActiveMenuItem === 'welcome') {
					this.setTheActiveMenuItem('search')
				}
				this.fetchTicketDetails()
			},
			startTrans(el) {
				el.style.height = el.scrollHeight + 'px'
			},
			endTrans(el) {
				el.style.height = ''
			},
			setTheActiveAccItem(num) {
				if (this.theActiveAccItem === num) {
					this.theActiveAccItem = null
				} else {
					this.theActiveAccItem = num
				}
			},
			setTheActiveMenuItem(menuItemKey) {
				this.theActiveMenuItem = menuItemKey
				if (menuItemKey === 'welcome') {
					this.clearSearchQuery()
					this.$nextTick(_ => {
						if (this.$refs.v_search_query) {
							this.$refs.v_search_query.focus()
						}
					})
				}
				if (menuItemKey === 'search') {
					if (this.$refs.v_search_query) {
						this.$refs.v_search_query.focus()
					}
				}
				if (menuItemKey === 'notes') {
					this.fetchEarlierTickets()
				}
			},
			clearSearchQuery() {
				if (this.$refs.v_search_query) {
					this.$refs.v_search_query.value = ""
				}
				this.searchQuery = ""
			},
			clearUxSearchQuery() {
				if (this.$refs.v_ux_search_query) {
					this.$refs.v_ux_search_query.value = ""
				}
				this.uxSearchQuery = ""
			},
			debounceSearch(e) {
				clearTimeout(this.debounce)
				this.debounce = setTimeout(() => {
					this.uxSearchQuery = e.target.value
				}, 600)
			},
			fetchEarlierTickets() {
				this.earlierTickets = [];
				this.isLoadingEarlierTickets = true;
				var myHeaders = new Headers();
				myHeaders.append("PP_USER_KEY", this.userKey);

				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};
				console.log('Fetching ticket details from API for days-filter:', this.theSelectedFilter, 'with user key:', this.userKey);
				fetch('https://test-portal.opennet.dk/ppServices/api/dc/gettroubleticketdetails/' + this.theSelectedFilter, requestOptions)
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(result => {
						console.log('success', result);
						this.earlierTickets = result;
					})
					.catch(error => {
						console.error('Error fetching earlierTickets details:', error);
					})
					.finally(() => {
						this.isLoadingEarlierTickets = false;
					});
			},
			fetchTicketDetails() {
				this.tickets = [];
				this.isLoadingTickets = true;
				var myHeaders = new Headers();
				myHeaders.append("PP_USER_KEY", this.userKey);

				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};
				console.log('Fetching ticket details from API for search query:', this.searchQuery, 'with user key:', this.userKey);
				fetch('https://test-portal.opennet.dk/ppServices/api/dc/gettroubleticketdetails/' + encodeURIComponent(this.searchQuery), requestOptions)
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(result => {
						console.log('success search', result);
						this.tickets = result;
					})
					.catch(error => {
						console.error('Error fetching ticket details:', error);
					})
					.finally(() => {
						this.isLoadingTickets = false;
						this.clearSearchQuery();
					});
			},
			fetchI18N() {
				this.isLoadingI18N = true
				var myHeaders = new Headers();
				myHeaders.append("PP_USER_KEY", this.userKey);
				myHeaders.append("Accept", "application/json");

				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};

				// Perform the fetch operation
				fetch("https://test-portal.opennet.dk/ppServices/api/general/getDisplayDetails/gettroubleticketdetails?language=DA", requestOptions)
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(result => {
						this.i18nData = result;
						console.log(this.i18nData);
					})
					.catch(error => {
						console.error('Error fetching i18n data:', error);
					})
					.finally(() => {
						this.isLoadingI18N = false;
					});
			}
		},
		mounted() {
			$('.o-page').removeClass('o-page--is-loading')
			this.$nextTick(_ => {
				if (this.$refs.v_search_query) {
					this.$refs.v_search_query.focus()
				}
			})
			this.fetchI18N()
		}
	})
})