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
				//console.log('observer::empty')
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
				const valuesToShow = ['creationDate',
					'address',
					'source',
					'pp_source',						      
					'pp_onid',
					'pp_type',	      
					'pp_startSLA',
					'pp_deadlineSLA',	      
					'classification',
					'severity',
					'assignedTo',
					'subState',
					'startSLA',
					'suspendedSLA',
					'resumeddSLA',
					'remoteStarted',
					//'onsideStarted',
					//'expectedOnsiteStart',
					//'expectedOnsiteEnd',
					'initialInstallationTime',
					'errorAfterInstallation',
					'relatedEntities.serviceProviderName',
					'relatedEntities.infrastructureOwnerName',
					'relatedEntities.networkOperatorName',
					'pp_from',
					'pp_to',						      
					'type',
					'description',
					'serviceSubscriptionId',
					'serviceStatus',
					'pp_from_status',
					'pp_to_status',						      
					'last_dc_note'

					

	
					
					
				];
				return this.tickets.map(ticket => {
					const v_notes = ticket.notes ? ticket.notes
						.sort((a, b) => this.parseDate(b.timestamp) - this.parseDate(a.timestamp)) // Sort notes by timestamp, newest first
						.map(note => ({
							...note,
							v_timestamp: note.timestamp
						})) : []
					const v_props = valuesToShow.reduce((props, propName) => {
						const propPath = propName.split('.');
						let value = ticket;

						for (let i = 0; i < propPath.length; i++) {
							value = value[propPath[i]];
							if (value === undefined || value === null) {
								break;
							}
						}

						if (value !== undefined && value !== null) {
							const displayName = this.i18n[propName] || propName;
							props[displayName] = value;
						}
						return props;
					}, {});

					return {
						...ticket,
						v_props: v_props,
						v_lastUpdated: ticket.lastUpdated,
						v_notes: v_notes,
						v_latest_note: v_notes.length > 0 ? this.parseDate(v_notes[0]['timestamp']) : new Date()
					};
				}).sort((a, b) => b.v_latest_note - a.v_latest_note);
			}
,
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
			parseDate(dateStr) { // this.parseDate('21-02-2024 13:36');
				const [datePart, timePart] = dateStr.split(' ');
				const [day, month, year] = datePart.split('-').map(num => parseInt(num, 10));
				const [hours, minutes] = timePart.split(':').map(num => parseInt(num, 10));
				const date = new Date(year, month - 1, day, hours, minutes);

				return date;
			},
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
				//console.log('show notes', ticketId)
				if (!this.showNotes[ticketId]) {
					this.$set(this.showNotes, ticketId, true);
				} else {
					this.$delete(this.showNotes, ticketId)
				}
			},
			getShowNotes(ticketId) {
				//console.log('getShowNotes', this.showNotes)
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
				theActiveAccItem: 'Kaldstyper',
				accItems: [
					{ id: 0, title: 'Kaldstyper', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us' },
					{ id: 1, title: 'Søgning', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which ' },
					{ id: 2, title: 'Visiteringsguide', content: 'ctetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, w' },
				],
				isSearching: false,
				i18nData: [],
				tickets: [],
				isLoadingTickets: false,
				savingStates: {},
				theDropdownFilters: [
					{ value: 1, title: 'I dag' },
					{ value: 3, title: '3 dage' },
					{ value: 7, title: 'Seneste 7 dage' },
					{ value: 14, title: 'Seneste 14 dage' },
					{ value: 21, title: 'Seneste 21 dage' },
					{ value: 30, title: 'Seneste 30 dage' },
					{ value: 60, title: 'Seneste 60 dage' },
					{ value: 90, title: 'Seneste 90 dage' },

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
				this.i18nData.forEach(item => {
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
			updateTicketNotes(success) {
				const targetArray = this.theActiveMenuItem === 'search' ? this.tickets : this.earlierTickets

				success.forEach(updatedTicket => {
					const idx = targetArray.findIndex(ticket => ticket.ticketId === updatedTicket.ticketId)
					if (idx < 0) {
						targetArray.push(updatedTicket)
					} else {
						this.$set(targetArray, idx, updatedTicket)
					}
				})
			},
			saveNote(noteObj) {
				const note = noteObj.note
				const ticketId = noteObj.ticketId
				this.$set(this.savingStates, ticketId, true);
				this.addNoteToTicket(ticketId, note)
			},
			async addNoteToTicket(ticketId, noteContent) {
				const apiUrl = '/ppServices/api/dc/addnote';
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
					this.updateTicketNotes(result)
					//console.log('Note added successfully:', result);
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
					const el = $('.input_search')
					if (el) {
						el.focus()
					}
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
			setTheActiveAccItem(str) {
				if (this.theActiveAccItem === str) {
					this.theActiveAccItem = null
				} else {
					this.theActiveAccItem = str
				}
			},
			setTheActiveMenuItem(menuItemKey) {
				this.theActiveMenuItem = menuItemKey
				this.$nextTick(_ => {
					const el = $('.input_search')
					if (el) {
						el.focus()
					}
				})
				if (menuItemKey === 'notes') {
					this.fetchEarlierTickets()
				}
			},
			clearSearchQuery() {
				this.$nextTick(_ => {
					const el = $('.input_search')
					if (el) {
						el.focus()
					}
				})
				this.searchQuery = ""
			},
			clearUxSearchQuery() {
				if (this.$refs.v_ux_search_query) {
					this.$refs.v_ux_search_query.value = ""
					this.$refs.v_ux_search_query.focus()
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

				// Function to convert dd-mm-yyyy hh24:mi to a Date object
				function parseDateString(dateString) {
					const parts = dateString.split(' ');
					const dateParts = parts[0].split('-');
					const timeParts = parts[1].split(':');

					// Note: month is 0-based, hence -1
					return new Date(dateParts[2], dateParts[1] - 1, dateParts[0], timeParts[0], timeParts[1]);
				}

				//console.log('Fetching ticket details from API for days-filter:', this.theSelectedFilter, 'with user key:', this.userKey);
				fetch('/ppServices/api/dc/getticketsbasedonnotes/' + this.theSelectedFilter, requestOptions)
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					//.then(result => {
					//console.log('success', result);

					.then(result => {
						// Assuming result is the array of tickets and each ticket has a last_dc_note property
						const sortedTickets = result.sort((a, b) => {
							// Convert last_dc_note to Date objects for comparison
							const dateA = parseDateString(a.last_dc_note);
							const dateB = parseDateString(b.last_dc_note);
							return dateB - dateA; // Sort in descending order
						});
						this.earlierTickets = sortedTickets;


						//this.earlierTickets = result;
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
				//console.log('Fetching ticket details from API for search query:', this.searchQuery, 'with user key:', this.userKey);

				fetch('/ppServices/api/dc/gettroubleticketdetails/' + this.searchQuery, requestOptions)
					.then(response => {
						//console.log({ response })
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.text();
					})
					.then(text => {
						try {
							const data = JSON.parse(text);
							//console.log('success search', data);
							this.tickets = data;
						} catch (e) {
							// If JSON.parse fails, it means the response was text, handle accordingly
							//console.log('Response is text, not JSON:', text);
							this.tickets = []; // Handle the case where the response is text, not JSON
						}
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
				fetch("/ppServices/api/general/getDisplayDetails/gettroubleticketdetails?language=DA", requestOptions)
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(result => {
						this.i18nData = result;
						//console.log(this.i18nData);
					})
					.catch(error => {
						//console.error('Error fetching i18n data:', error);
					})
					.finally(() => {
						this.isLoadingI18N = false;
					});
			}
		},
		mounted() {
			$('.o-page').removeClass('o-page--is-loading')
			this.$nextTick(_ => {
				const el = $('.input_search')
				if (el) {
					el.focus()
				}
			})
			this.fetchI18N()
		}
	})
})
