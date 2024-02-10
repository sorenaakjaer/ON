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
				theActiveAccItem: 0,
				accItems: [
					{ id: 0, title: 'Kaldstyper', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us' },
					{ id: 1, title: 'Søgning', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which ' },
					{ id: 2, title: 'Visiteringsguide', content: 'ctetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, w' },
				],
				isSearching: false,
				i18nArr: []
			}
		},
		computed: {
			userKey() {
				return eTrayWebportal && eTrayWebportal.User.Key ? eTrayWebportal.User.Key : null
			}
		},
		methods: {
			onSearch() {
				if (this.searchQuery.length < 1) {
					this.$refs.v_search_query.focus()
					return
				}
				if (this.theActiveMenuItem === 'welcome') {
					this.setTheActiveMenuItem('search')
				}
				this.fetchTickeyDetails()
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
					this.$nextTick(_ => {
						if (this.$refs.v_search_query) {
							this.$refs.v_search_query.focus()
						}
					})
				}
			},
			clearSearchQuery() {
				if (this.$refs.v_search_query) {
					this.$refs.v_search_query.value = ""
				}
				this.searchQuery = ""
			},
			debounceSearch(e) {
				const menuItemsToDebounce = ['notes']
				if (menuItemsToDebounce.indexOf(this.theActiveMenuItem) < 0) {
					this.searchQuery = e.target.value
					console.log('no debounce')
					return
				}
				this.searchQuery = ""
				clearTimeout(this.debounce)
				this.debounce = setTimeout(() => {
					this.searchQuery = e.target.value
				}, 600)
			},
			fetchTickeyDetails() {
				var myHeaders = new Headers();
				myHeaders.append("PP_USER_KEY", this.userKey);

				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};

				console.log('fetch', 'https://test-portal.opennet.dk/ppServices/api/dc/gettroubleticketdetails/' + this.searchQuery, this.userKey)

				fetch('https://test-portal.opennet.dk/ppServices/api/dc/gettroubleticketdetails/' + this.searchQuery, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
			},
			fetchI18N() {
				this.i18nArr = I18N
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