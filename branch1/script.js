var vueUrl = 'https://cdn.jsdelivr.net/npm/vue@2' // '/portal/page_code_files/ext_files/vue@2.js'
var flatPickerCSSUrl = 'https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.css' // '/portal/page_code_files/ext_files/flatpickr.min.css'
var flatPickerJSUrl = 'https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.js' // '/portal/page_code_files/ext_files/flatpickr.min.js'
var flatPickerComponentUrl = 'https://cdn.jsdelivr.net/npm/vue-flatpickr-component@8' // '/portal/page_code_files/ext_files/vue-flatpickr-component@8.js'

var dayJsUrl = "https://cdn.jsdelivr.net/npm/dayjs@1.11.10/dayjs.min.js"; // "/portal/page_code_files/ext_files/dayjs.min.js"
var dayJsLocaleUrl = "https://cdn.jsdelivr.net/npm/dayjs@1.11.10/locale/da.js"; // "/portal/page_code_files/ext_files//locale/da.js"
var dayJsRelativeTimeUrl = "https://cdn.jsdelivr.net/npm/dayjs@1.11.10/plugin/relativeTime.js"; // "/portal/page_code_files/ext_files//relativeTime.js"
var dayJsLocalizedFormatUrl = "https://cdn.jsdelivr.net/npm/dayjs@1.11.10/plugin/localizedFormat.js"; // '/portal/page_code_files/ext_files//localizedFormat.js'

var quillCssUrl = 'https://cdn.quilljs.com/1.3.6/quill.snow.css'; // '/portal/page_code_files/ext_files/quill.snow.css 
var quillJsUrl = 'https://cdn.quilljs.com/1.3.6/quill.js'; // '/portal/page_code_files/ext_files/quill.js'
var purifyJsUrl = 'https://cdn.jsdelivr.net/npm/dompurify/dist/purify.min.js'; // '/portal/page_code_files/ext_files/purify.min.js'
var popperJsUrl = 'https://unpkg.com/@popperjs/core@2' // /portal/page_code_files/ext_files/popper.min.js
var virtualScrollCssUrl = 'https://unpkg.com/vue-virtual-scroller/dist/vue-virtual-scroller.css' // '/portal/page_code_files/ext_files/vue-virtual-scroller.css'

// Set loaded div
$('.triggers').html($('.triggers').html() + '<div class="v_js_loaded"></div>');

// STEP 1 - TRIGGER TRIGGER_AFTER_LOGIN - START  //
$(document).one("TRIGGER_AFTER_LOGIN", function () {
	//console.log('TRIGGER_AFTER_LOGIN')
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

	// Set Secret record
	$('.PBI_Set_sharedSecret > a').click();


	var e, t, s = $(".LOGIN_CUSTOMER_TYPE > input").val();
	"SP" == s && ($(".typ_of_cust_cat option").filter(function () {
		return $(this).text() == $(".LOGIN_CUSTOMER_TYPE > input").val()
	}).prop("selected", !0), $(".typ_of_cust_cat > select").change(), $(".INQUIRY_TYPE_LEVEL1 option").filter(function () {
		return "Case" == $(this).text()
	}).prop("selected", !0), $(".INQUIRY_TYPE_LEVEL1 > select").trigger("change")), "IO" == s && ($(".typ_of_cust_cat option").filter(function () {
		return $(this).text() == $(".LOGIN_CUSTOMER_TYPE > input").val()
	}).prop("selected", !0), $(".typ_of_cust_cat > select").change(), $(".INQUIRY_TYPE_LEVEL1 option").filter(function () {
		return "Case IO" == $(this).text()
	}).prop("selected", !0), $(".INQUIRY_TYPE_LEVEL1 > select").trigger("change"), $(".menu_announcement > div > p").html("L\xe6s/rediger/opret aktive og tidligere udmeldinger / varslinger")), $.blockUI.defaults = {
		message: "",
		fadeIn: 0,
		fadeOut: 0,
		timeout: 0,
		showOverlay: !1,
		centerY: !1,
		css: {
			width: "1px",
			top: "0",
			left: "",
			right: "0",
			border: "none",
			padding: "0",
			opacity: 0,
			color: "#fff"
		}
	}, $(".INQUIRY_TYPE_LEVEL2_SP > select").html($(".LIST_OF_CREATE_CASES_OPTION_SP > input").val()), $(".INQUIRY_TYPE_LEVEL2_IO > select").html($(".LIST_OF_CREATE_CASES_OPTION_IO > input").val()), "OpenNet" == $(".FROM_COMPANY > input").val() && $(".INQUIRY_TYPE_LEVEL0").removeClass("hidden_field"), $(".INQUIRY_TYPE_LEVEL0").change(function () {
		("IO" == $(".INQUIRY_TYPE_LEVEL0 > select").find(":selected").text() || "Til Service Provider (SP)" == $(".INQUIRY_TYPE_LEVEL0 > select").find(":selected").text()) && ($(".INQUIRY_TYPE_LEVEL1 option").filter(function () {
			return "Case IO" == $(this).text()
		}).prop("selected", !0), $(".INQUIRY_TYPE_LEVEL1 > select").trigger("change")), ("SP" == $(".INQUIRY_TYPE_LEVEL0 > select").find(":selected").text() || "Til Infrastructure owner (IO)" == $(".INQUIRY_TYPE_LEVEL0 > select").find(":selected").text()) && ($(".INQUIRY_TYPE_LEVEL1 option").filter(function () {
			return "Case" == $(this).text()
		}).prop("selected", !0), $(".INQUIRY_TYPE_LEVEL1 > select").trigger("change"))
	}), "-1" == $(".IO_RELATION_LIST > input").val().indexOf("OpenNet") && $(".IO_RELATION_LIST > input").val('<option value="">[V\xe6lg]</option>' + $(".IO_RELATION_LIST > input").val()), "-1" == $(".SP_RELATION_LIST > input").val().indexOf("OpenNet") && $(".SP_RELATION_LIST > input").val('<option value="">[V\xe6lg]</option>' + $(".SP_RELATION_LIST > input").val()), $(".SP_PICKLIST > select").html($(".SP_RELATION_LIST > input").val()), $(".IO_PICKLIST > select").html($(".IO_RELATION_LIST > input").val()), "OpenNet" == $(".FROM_COMPANY > input").val() && ($(".IO_ASSIGN_TO_OPENNET_TEXTBOX").removeClass("hidden_field"), $(".IO_ASSIGN_TO_OPENNET_TEXTBOX > select").html($(".SP_PICKLIST > select").html()), $(".SP_ASSIGN_TO_OPENNET_TEXTBOX").removeClass("hidden_field"), $(".SP_ASSIGN_TO_OPENNET_TEXTBOX > select").html($(".IO_PICKLIST > select").html())), $(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_ANNOUNCEMENT > input").val()), $(".EXT_DOCS_TYPE option").filter(function () {
		return "Andet" == $(this).text()
	}).prop("selected", !0), $(".js-filter__open-cases").click(),
		$(".v_list_of_cases").html($(".ETRAY_LIST_OF_USERS > div").html()),
		clearJSONfields(),
		$(".UM_COPY_OF > select").html('<option value="">[V\xe6lg]</option>' + $(".v_list_of_cases").html().replaceAll("</p>", "</option>").replaceAll("<p id", "<option value"))
		, "true" == $(".show_announcement_menu").html() || $(".menu_announcement").addClass("hidden_field")
		, "true" == $(".show_contract_menu").html() || $(".menu_contract").addClass("hidden_field")
		, "true" == $(".show_documentation_menu").html() || $(".menu_documentaion").addClass("hidden_field")
		, "true" == $(".show_invoice_menu").html() || $(".menu_invoice").addClass("hidden_field")
		, "true" == $(".show_report_menu").html() || $(".menu_report").addClass("hidden_field")
		, "true" == $(".show_openanalytics_menu").html() || $(".menu_openanalytics").addClass("hidden_field")
		, "true" == $(".show_user_admin_menu").html() || $(".menu_user_admin").addClass("hidden_field")
		, "true" == $(".show_end_customer_orders").html() || $(".menu_end_customer_orders").addClass("hidden_field")
		, "true" == $(".show_end_customer_pricing_config").html() || $(".menu_end_customer_pricing_config").addClass("hidden_field")
		, $.getScript(vueUrl, function (e, t, s) {
			$(document).trigger("trigger::vue_loaded")
		}), setInterval(function () {
			$(".BTN_KeepAlive > a").click()
		}, 3e5), $(".UM_USER_NAME > input").on("keyup", function () {
			clearTimeout(e), e = setTimeout(function () {
				var e = $(".UM_USER_NAME > input").val().toLowerCase().replaceAll("\xf8", "oe").replaceAll("\xe6", "ae").replaceAll("\xe5", "aa").replaceAll(" ", "_").substring(0, 18);
				UM_USERNAME_VALIDATION(e)
			}, 600)
		}), $(".UM_USER_INIT > input").on("keyup", function () {
			Set_UM_USER_INIT = !1, clearTimeout(t), t = setTimeout(function () {
				$(".BTN_GetUserValidation > a").click(), $(".BTN_GetUserValidation_Result > input").val("N"), WAIT_FOR_UM_USERNAME_VALIDATION_ANSWER_ETRAY()
			}, 600)
		})

	//Temp For Eniig SP
	if ($(".FROM_COMPANY > input").val() == "Eniig SP") {
		$(".menu_create_cases").addClass("hidden_field")
		$(".js-btn-create-case").addClass("hidden_field")
	}
	//

	$('.SSID > input').keyup(function () {
		var V_SSID = $('.SSID:visible > input').val().length;
		var V_SSID_VAL = $('.SSID:visible > input').val();
		$(".SSID_DESC:visible > div").html('');
		if (V_SSID == 10) {
			//console.log('V_SSID_VAL',V_SSID_VAL)
			$('.API_SSID > input').val(V_SSID_VAL);
			// Set observer 
			observeChanges('.API_TO_COMPANY_NAME_RESULT > input', (OK) => {
				if ($('.API_TO_COMPANY_NAME_RESULT > input').val() == 'OK') {
					$('.IO_PICKLIST:visible > select').val($('.API_TO_COMPANY_NAME > input').val())
					$('.IO_PICKLIST:visible > select').prop('disabled', 'disabled');
					$('.IO_PICKLIST:visible > select').change();
					$('.API_TO_COMPANY_NAME_RESULT > input').val('');
					$(".SSID_DESC:visible > div").html('<p><em><strong><span style="color:#2ecc71">Gyldigt Service Subscription ID fundet. &quot;Send til&quot;&nbsp; dropdown er automatisk udfyldt.</span></strong></em></p>');
					// Ved success
					$('.SSID:visible > .o-icon-on-input').remove()
					$('.SSID:visible').append('<i class="o-icon-on-input o-icon-on-input--success tio">checkmark_circle</i>')
				}

				if ($('.API_TO_COMPANY_NAME_RESULT > input').val() == 'Not found') {
					$('.IO_PICKLIST:visible > select').removeAttr('disabled');
					$(".SSID_DESC:visible > div").html('<p><span style="color:#c0392b"><em><strong>Kunne ikke finde angivet Service Subscription ID i system.&nbsp;</strong></em></span></p>');
					$('.IO_PICKLIST:visible > select').change();
					// Ved fejl
					$('SSID:visible > .o-icon-on-input').remove()
					$('SSID:visible').append('<i class="o-icon-on-input tio">error</i>')

				}







			});
			//Get data
			$('.API_TO_COMPANY_NAME_BTN > a').click();
		}
		else {
			$('.IO_PICKLIST:visible > select').removeAttr('disabled');
			$('.IO_PICKLIST:visible > select').change();
		}


	})

	function observeChanges(selector, callback) {
		const el = $(selector)
		if (!el || el.length === 0) {
			//console.warn(`No element found with selector ${selector}`);
			return;
		}
		el.val('loading')
		let cInterval = setInterval(_ => {
			const val = el.val()
			if (val !== 'loading') {
				clearInterval(cInterval)
				callback(val);
			} else {
				//console.log('observer::empty', { selector })
			}
		}, 1000)
	}


	// New SSID code	

	// Bind click event for closing case creation
	$(".js-close-o-create-case").on("click", function () {
		closeCreateCase();
	});

	// Bind click event for overlay click
	$(".js-click-on-overlay").on("click", function () {
		closeCreateCase();
		closeCasesModal();
	});

	// Bind click event for case creation cancellation
	$(".js-btn-create-case-cancel").on("click", function () {
		closeCreateCase();
	});

	setProgressPath()


	$(".js-case__save-commentary").on("click", function () {
		var commentText = $(".comment_field").val();

		if (commentText != '') {
			$(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val(commentText);
			$(".ETRAY_READ_MESSAGE_TYPE > input").val($(".ETRAY_COMMENT_MESSAGE_TYPE > input").val());

			var caseIdToken = $(".o-modal__case").attr("data-case-id-token");
			var caseId = $(".o-modal__case").attr("data-case-id");

			$(".ETRAY_READ_CASE_TOKEN_ID > input").val(caseIdToken);
			$(".ETRAY_READ_CASE_ID > input").val(caseId);

			if (submit_validation_logic() === true) {
				clearJSONfields();
				$(".webformCreateMore").click();
				addMutationOberserverToSingleCase();
				clear_fields_after_submit();
				readEtrayCase(caseIdToken, caseId);
			}

			if (!$(".js-case__save-commentary").hasClass("o-btn--loading")) {
				$(".js-case__save-commentary").addClass("o-btn--loading");
			}

			$(document).one("etray::single-case-loaded", function () {
				$(".o-modal__case__commentary__textarea").val("");
				$(".js-case__save-commentary").removeClass("o-btn--loading");
			});

			if ("Afsluttet" == $("#js-case-element__inserted > div > .etray_case_status span").html()) {
				$("#js-case-element__inserted > div > .etray_case_status").html('<span class="o-pill o-pill--yellow">Åben</span>');
				$(".js-case__save-commentary").html("Gem kommentar");

				if ($(".js-case-save-close").hasClass("display_none")) {
					$(".js-case-save-close").removeClass("display_none");
				}

				if (!$(".js-case-save-reopen").hasClass("display_none")) {
					$(".js-case-save-reopen").addClass("display_none");
				}

				$(document).trigger("vue::update_case_prop", [caseId, { filter_open_closed: "open" }]);
			}
		}
	});



	$(".js-case-click-assign-case").on("click", function () {
		openSmallModal("js-o-modal--small__assign-case");
		var e = $(".o-modal__case").attr("data-case-id-token"),
			t = $(".o-modal__case").attr("data-case-id");
		$(".ETRAY_READ_CASE_TOKEN_ID > input").val(e), $(".ETRAY_READ_CASE_ID > input").val(t), $(".js-o-modal--small__assign-case .js-o-select-items").html(""), $(".v_list_of_cases > p").each(function () {
			let e = $(this).attr("id"),
				t = $(this).text();
			$(".js-o-modal--small__assign-case .js-o-select-items").append('<li id="' + e + '">' + t + "</a></li>")
		}), oSelect();
		var s = $(".ETRAY_READ_CASE__ASSIGNED_USER_ID > input").val();
		s ? oSelectPreselect("js-o-modal--small__assign-case", s) : resetOSelectPreSelected("js-o-modal--small__assign-case"), setTimeout(function () {
			$(".o-select").hasClass("o-select--item-selected") || $(".o-search-input").focus()
		}, 250)
	});

	$(".js-close-modal-small").on("click", function () {
		closeSmallModal(), closeOSelect()
	});

	$(".js-click-modal-small-cancel").on("click", function () {
		closeSmallModal(), closeOSelect()
	});

	$(".js-case-assign-case-save").on("click", function () {
		var e = $(".js-o-modal--small__assign-case .js-o-select-selected-item-id").val(),
			t = $(".js-o-modal--small__assign-case .o-modal__case__commentary__textarea").val(),
			s = $(".js-o-select-selected-item-name").text();
		$(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val(t), $(".ETRAY_READ_CASE__ASSIGNED_USER_ID > input").val(e), $(".ETRAY_READ_MESSAGE_TYPE > input").val("ASSIGN_TO"), $(".ETRAY_UPDATE_CASE > a").click(), $("#js-case-element__inserted > div > .js-case-assigned-to").html("Tildelt: " + s), addMutationOberserverToSingleCase(), closeSmallModal("js-o-modal--small__assign-case"), closeOSelect(), readEtrayCaseComments();
		var a = $(".o-modal__case").attr("data-case-id");
		$(document).trigger("vue::update_case_prop", [a, {
			assign_to: s
		}]), setTimeout(function () {
			$(".o-modal__case__commentary__textarea").val(""), $(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val("")
		}, 0)
	});

	$(".js-click-case-change-category").on("click", function () {
		openSmallModal("js-o-modal--small__change-category");
		var e = $(".ETRAY_READ_CASE__CATEGORY_ID > input").val();
		e && oSelectPreselect("js-o-modal--small__change-category", e)
	});

	$(".ETRAY_LIST_OF_CATEGORIES > p").each(function () {
		let e = $(this).attr("id"),
			t = $(this).text();
		$(".js-o-modal--small__change-category .js-o-select-items").append('<li id="' + e + '">' + t + "</a></li>")
	});

	$(".js-case-change-category-save").on("click", function () {
		var e = $(".js-o-modal--small__change-category .js-o-select-selected-item-id").val(),
			t = $(".js-o-modal--small__change-category .o-modal__case__commentary__textarea").val();
		$(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val(t), $(".ETRAY_READ_CASE__CATEGORY_ID > input").val(e), $(".ETRAY_UPDATE_CASE__CATEGORY_ID").click(), closeSmallModal("js-o-modal--small__change-category"), closeOSelect(), readEtrayCaseComments(), setTimeout(function () {
			$(".o-modal__case__commentary__textarea").val(""), $(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val("")
		}, 0)
	});

	$(".js-click-case-follow-up").on("click", function () {
		openSmallModal("js-o-modal--small__follow-up")
	});

	$(".js-case-save-follow-up").on("click", function () {
		var e = $(".js-o-modal--small__follow-up .datetimepicker").val(),
			t = $(".js-o-modal--small__follow-up .o-modal__case__commentary__textarea").val(),
			s = $(".o-modal__case").attr("data-case-id-token"),
			a = $(".o-modal__case").attr("data-case-id");
		$(".ETRAY_READ_CASE_TOKEN_ID > input").val(s), $(".ETRAY_READ_CASE_ID > input").val(a), $(".ETRAY_READ_CASE__FOLLOW_UP > input").val(e), $(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val(t), $(".ETRAY_READ_MESSAGE_TYPE > input").val("FOLLOW_UP"), $(".ETRAY_UPDATE_CASE > a").click(), $("#js-case-element__inserted > div > .etray_case_status").html('<div class="etray_case_status">Status:<span class="o-pill o-pill--red">Opf\xf8lgning</span></div>'), addMutationOberserverToSingleCase(), closeSmallModal("js-o-modal--small__follow-up"), readEtrayCaseComments(), setTimeout(function () {
			$(".o-modal__case__commentary__textarea").val(""), $(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val("")
		}, 1e3)
	});

	$(".js-case-save-close").on("click", function () {
		var e = $(".o-modal__case").attr("data-case-id-token"),
			t = $(".o-modal__case").attr("data-case-id");
		$(".ETRAY_READ_CASE_TOKEN_ID > input").val(e), $(".ETRAY_READ_CASE_ID > input").val(t), $(".ETRAY_READ_MESSAGE_TYPE > input").val("CLOSE_CASE"), $(".ETRAY_UPDATE_CASE > a").click(), addMutationOberserverToSingleCase(), readEtrayCaseComments(), $("#js-case-element__inserted > div > .etray_case_status").html('<div class="etray_case_status">Status:<span class="o-pill o-pill--grey">Afsluttet</span></div>'), $(".js-case__save-commentary").html("Gem kommentar og gen\xe5ben sag"), $(".js-case-save-close").hasClass("display_none") || $(".js-case-save-close").addClass("display_none"), $(".js-case-save-reopen").hasClass("display_none") && $(".js-case-save-reopen").removeClass("display_none"), $(document).trigger("vue::update_case_prop", [t, {
			filter_open_closed: "closed"
		}])
	});

	$(".js-case-save-reopen").on("click", function () {
		var e = $(".o-modal__case").attr("data-case-id-token"),
			t = $(".o-modal__case").attr("data-case-id");
		$(".ETRAY_READ_CASE_TOKEN_ID > input").val(e), $(".ETRAY_READ_CASE_ID > input").val(t), $(".ETRAY_READ_MESSAGE_TYPE > input").val("REOPEN_CASE"), $(".ETRAY_UPDATE_CASE > a").click(), addMutationOberserverToSingleCase(), readEtrayCaseComments(), $("#js-case-element__inserted > div > .etray_case_status").html('<div class="etray_case_status">Status:<span class="o-pill o-pill--yellow">\xc5ben</span></div>'), $(".js-case__save-commentary").html("Gem kommentar"), $(".js-case-save-close").hasClass("display_none") && $(".js-case-save-close").removeClass("display_none"), $(".js-case-save-reopen").hasClass("display_none") && $(".js-case-save-reopen").addClass("display_none"), $(document).trigger("vue::update_case_prop", [t, {
			filter_open_closed: "open"
		}])
	});

	$(".js-follow-case").on("click", function () {
		var e = $(".o-modal__case").attr("data-case-id-token"),
			t = $(".o-modal__case").attr("data-case-id");
		$(".ETRAY_READ_CASE_TOKEN_ID > input").val(e), $(".ETRAY_READ_CASE_ID > input").val(t), $(".ETRAY_READ_MESSAGE_TYPE > input").val("FOLLOW"), $(".ETRAY_UPDATE_CASE > a").click(), addMutationOberserverToSingleCase(), readEtrayCaseComments()
	});

	$(".js-click-case-create-note").on("click", function () {
		openSmallModal("js-o-modal--small__create-note")
	});

	$(".js-case-create-note").on("click", function () {
		$(".js-o-modal--small__create-note .datetimepicker").val();
		var e = $(".js-o-modal--small__create-note .o-modal__case__commentary__textarea").val(),
			t = $(".o-modal__case").attr("data-case-id-token"),
			s = $(".o-modal__case").attr("data-case-id");
		$(".ETRAY_READ_CASE_TOKEN_ID > input").val(t), $(".ETRAY_READ_CASE_ID > input").val(s), $(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val(e), $(".ETRAY_READ_MESSAGE_TYPE > input").val("INTERNAL_NOTE"), $(".ETRAY_UPDATE_CASE > a").click(), addMutationOberserverToSingleCase(), closeSmallModal("js-o-modal--small__create-note"), readEtrayCaseComments(), setTimeout(function () {
			$(".o-modal__case__commentary__textarea").val(""), $(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val("")
		}, 0)
	});

	$(".js-click-case-edit-ref").on("click", function () {
		openSmallModal("js-o-modal--small__edit-ref")
	});

	$(".js-case-edit-ref").on("click", function () {
		$(".js-o-modal--small__create-note .datetimepicker").val();
		var e = $(".js-o-modal--small__edit-ref .o-modal__case__commentary__textarea").val(),
			t = $(".o-modal__case").attr("data-case-id-token"),
			s = $(".o-modal__case").attr("data-case-id");
		$(".ETRAY_READ_CASE_TOKEN_ID > input").val(t), $(".ETRAY_READ_CASE_ID > input").val(s), $(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val(e), $(".ETRAY_READ_MESSAGE_TYPE > input").val("EDIT_REF"), $(".ETRAY_UPDATE_CASE > a").click(), $("#js-case-element__inserted > div > .js-intern-ref").html("Intern ref:" + e), $(document).trigger("vue::update_case_prop", [s, {
			company_ref: e
		}]), addMutationOberserverToSingleCase(), closeSmallModal("js-o-modal--small__create-note"), readEtrayCaseComments(), setTimeout(function () {
			$(".o-modal__case__commentary__textarea").val(""), $(".ETRAY_READ_CASE__COMMENT_TEXTAREA > textarea").val("")
		}, 0)
	})

	$(".js-follow-case").on("click", function () {
		if ($(this).hasClass("js-is-following-case")) {
			$(this).removeClass("js-is-following-case"), $(".ETRAY_READ_CASE__USER_FOLLOWS > input").val("false");
			var e = $(".o-modal__case").attr("data-case-id");
			$(document).trigger("vue::update_case_prop", [e, {
				filter_followed_by_me: "false"
			}])
		} else {
			$(this).addClass("js-is-following-case"), $(".ETRAY_READ_CASE__USER_FOLLOWS > input").val("true");
			var e = $(".o-modal__case").attr("data-case-id");
			$(document).trigger("vue::update_case_prop", [e, {
				filter_followed_by_me: "true"
			}])
		}
		$(".ETRAY_UPDATE_CASE__USER_FOLLOWS_UPDATE > button").click()
	});

	$(".js-filter__assigned_to").on("click", function () {
		$(".js-filter__assigned_to .js-o-dropdown__ul").append('<li id="">Alle brugere</li>');
	});

	$(".v_list_of_cases > p").each(function () {
		let e = $(this).attr("id"),
			t = $(this).text();
		$(".js-filter__assigned_to .js-o-dropdown__ul").append('<li id="' + e + '">' + t + "</li>")
	});


	$(document).on("etray::single-case-loaded", function () {
		"true" != $(".ETRAY_READ_CASE__USER_FOLLOWS > input").val() || $(".js-follow-case").hasClass("js-is-following-case") || $(".js-follow-case").addClass("js-is-following-case")
	});



	$(document).ready(function () {
		$("textarea").on("keyup keypress", function () {
			$(this).height(0), $(this).height(this.scrollHeight)
		})
	});

	// Attach a click event to the list items under the dropdown
	$(".js-filter__assigned_to.js-o-dropdown ul li").on("click", function () {

		// Grab the value from a particular input
		var inputVal = $(".ETRAY_LIST_VIEWER_CASES_LEVEL_5 > input").val();

		// Get the ID of the clicked list item
		var clickedId = $(this).attr("id");

		// Get the ID of the selected dropdown item
		var selectedDropdownId = $(this).closest(".js-o-dropdown")
			.find(".o-dropdown__selected p")
			.attr("id");

		// Initialize a replacement string                                    
		var replaceStr = "";

		// Replace the text and ID of the selected dropdown item with the clicked item's values
		var selectedDropdownText = $(this).closest(".js-o-dropdown")
			.find(".o-dropdown__selected p");
		selectedDropdownText.text($(this).text());
		selectedDropdownText.attr("id", clickedId);

		// Replace the selected ID in the input value with the clicked ID
		replaceStr = inputVal.replace(selectedDropdownId, clickedId);
		$(".ETRAY_LIST_VIEWER_CASES_LEVEL_5 > input").val(replaceStr);

		// If there's an ID, handle the dropdown selection and potentially update another filter
		if (clickedId.length > 0) {

			var dropdown = $(this).closest(".js-o-dropdown");

			// If the dropdown doesn't already indicate a selection, add the indicator
			if (!dropdown.hasClass("o-dropdown--has-selection")) {
				dropdown.addClass("o-dropdown--has-selection");

				var notAssignedFilter = $(".js-filter__not_assigned");

				// If the 'not assigned' filter is active, deactivate it and remove its effect
				if (notAssignedFilter.hasClass("o-btn__filter---active")) {
					notAssignedFilter.removeClass("o-btn__filter---active");

					var level3InputVal = $(".ETRAY_LIST_VIEWER_CASES_LEVEL_3 > input").val();
					level3InputVal = level3InputVal.replace(notAssignedFilter.data("filter"), "");
					$(".ETRAY_LIST_VIEWER_CASES_LEVEL_3 > input").val(level3InputVal);
				}
			}
		} else {
			// If there's no ID, indicate that the dropdown has no selection
			$(this).closest(".js-o-dropdown").removeClass("o-dropdown--has-selection");
		}
	});




	/*	
	// Check if the current element has the class 'o-dropdown--active'
	if ($(this).hasClass("o-dropdown--active")) {
		// If it does, call the 'closeDropdown' function
		closeDropdown();
	};
	
	// Attach a click event handler to the element with class 'o-page'
	$(".o-page").on("click", function (e) {
		if (!$(e.target).closest(".js-o-dropdown").hasClass("o-dropdown--active")) {
			closeDropdown();
		}
	});
	*/

	$("#js-checkbox__toogle-timeline_read_msg").click(function () {
		$(this).is(":checked") ? showTimelineReadMsg() : hideTimelineReadMsg()
	}), readTimelineReadMsgCookie();
	var report = null;


	readAllNotifications();
	readAllNumberOfCases();

	$(".js-close-modal").on("click", function () {
		closeCasesModal()
	});

	$(".js-case-click-add-file").on("click", function () {
		$('.ETRAY_COMMENT_UPLOAD input[type="file"]').click(), addMutationObserverOnCommentFiles()
	});

	$(window).on("scroll", function () {
		$(this).scrollTop() > offset ? $(".progress_indicator").addClass("active-progress") : $(".progress_indicator").removeClass("active-progress")
	}), $(".progress_indicator").on("click", function (e) {
		return e.preventDefault(), $("html, body").animate({
			scrollTop: 0
		}, duration), !1
	})




});
// TRIGGER trigger::o_page_loaded - END //

//STEP 3 - TRIGGER VUE_LOADED - START //
$(document).one("trigger::vue_loaded", function () {
	function e(e) {
		var t, s, a = e.srcElement;
		e.stopPropagation(), e.preventDefault(), s = (t = e.clipboardData || window.clipboardData).getData("Text");
		var i = $("#" + a.id).prop("selectionStart"),
			r = $("#" + a.id).val(),
			o = r.substring(0, i),
			n = r.substring(i, r.length);
		$("#" + a.id).val(o + s + n)
	}
	document.querySelectorAll(".Web_MainControl_textbox").forEach(function (t) {
		t.addEventListener("paste", e)
	})
	document.querySelectorAll(".Web_MainControl_note").forEach(function (t) {
		t.addEventListener("paste", e)
	})

	Vue.directive("click-outside", {
		bind: function (e, t, s) {
			e.clickOutsideEvent = function (a) {
				e == a.target || e.contains(a.target) || s.context[t.expression](a)
			}, document.body.addEventListener("click", e.clickOutsideEvent)
		},
		unbind: function (e) {
			document.body.removeEventListener("click", e.clickOutsideEvent)
		}
	})
	addVueFlatPickerFromCDN()
	function addVueFlatPickerFromCDN() {
		const cssLink = document.createElement('link');
		cssLink.rel = 'stylesheet';
		cssLink.href = flatPickerCSSUrl;
		document.head.appendChild(cssLink);

		$.getScript(flatPickerJSUrl, function () {
			$.getScript(flatPickerComponentUrl, function () {

				$(document).trigger("trigger::vue__flat_picker_loaded");
				console.log('Vue-Flatpickr component loaded');
			});
		});
	}

	$(document).on('trigger::vue__flat_picker_loaded', () => {
		Vue.component('flat-pickr', VueFlatpickr)
	})

	Vue.component('o-announcements', {
		template: '#o-announcements-template',
		props: {
			active_area: {
				default: 'OperationsStatus' // 'OperationsStatus' or 'News'
			},
			the_user: {
				default: () => { }
			},
			the_user_type: {
				default: '' // IO, SP, ON etc.
			},
			prop_is_create_announcement_modal: {
				type: Boolean,
				default: false
			},
			the_active_company_name: {
				default: '' // 'SP Dev Company', 'IO Dev Company', 'Opennet' etc.
			}
		},
		data() {
			return {
				isListView: false,
				isLoadingAnnouncements: false,
				announcements: [],
				dataIsCreateAnnouncementModal: false,
				isNewMasterModal: false,
				searchQuery: '',
				debounce: null,
				theActiveFilterFrom: [],
				theActiveFilterStatuses: [],
				theActiveFilterTypes: [],
				theActiveFilterPeriod: { startDate: new Date(), endDate: new Date() },
				theActiveFilterPeriodDays: 30,
				theAnnActiveItem: null,
				standardOptions: {},
				isLoadingStandardOptions: false,
				masterTemplates: [],
				isLoadingMasterTemplates: false,
				theEditMasterTemplate: null,
				theNewMasterTemplateId: null,
				theEditAnnouncement: null,
				theActiveSeeMoreCase: null,
				isDayJSLoadedToPage: false
			}
		},
		computed: {
			isCreateAnnouncementModal() {
				return this.dataIsCreateAnnouncementModal || this.prop_is_create_announcement_modal
			},
			activeAnnouncements() {
				return this.announcements.filter(announcement => announcement.area === this.active_area)
			},
			standardOptionsPartners() {
				return this.standardOptions && this.standardOptions['extMsg_Partners'] ? this.standardOptions['extMsg_Partners'] : []
			},
			activeAnnouncementsWithVProps() {
				const potentialReceivers = [{ id: 'ALL', name: 'All' }, { id: 'ALL_SPs', name: 'All SPs' }, { id: 'ALL_IOs', name: 'All IOs' }].concat(this.filteredReceivers)
				const changeIdsToNames = (arr) => {
					const rece = arr && arr.length > 0 ? arr : ''
					const names = rece.split(';').map(userid => {
						const idx = potentialReceivers.findIndex(user => user.id === userid);
						if (idx > -1) {
							return potentialReceivers[idx]['name']
						} else {
							return userid
						}
					})
					return names.join(', ')
				}
				return this.activeAnnouncements.map(ann => ({
					...ann,
					v_id: `${ann.onid}_${ann.version}`,
					v_from: changeIdsToNames(ann.from),
					v_receivers: changeIdsToNames(ann.receivers),
					v_timeFromNow: this.isDayJSLoadedToPage ? dayjs(ann.createdTime).fromNow() : ann.createdTime,
					v_createTimeFormatted: this.isDayJSLoadedToPage ? dayjs(ann.createdTime).format('LLL') : ann.createdTime,
					v_attachments: ann.attachments ? JSON.parse(ann.attachments) : [],
					v_logo: this.standardOptionsPartners.find(partner => partner.id === ann.from) ? this.standardOptionsPartners.find(partner => partner.id === ann.from)['logo'] : 'https://opennet.dk/assets/img/logo-clean.png'
				}))
			},
			announcementsInVersionsArr() {
				const groupedByOnid = this.activeAnnouncementsWithVProps.reduce((acc, curr) => {
					(acc[curr.onid] = acc[curr.onid] || []).push(curr);
					return acc;
				}, {});
				return Object.values(groupedByOnid).map(group => {
					group.sort((a, b) => b.version - a.version);

					const newest = group[0];
					const earlierVersions = group.slice(1);
					return {
						...newest,
						v_earlierVersions: earlierVersions
					};
				});
			},
			vAnnouncements() {
				return this.announcementsInVersionsArr.sort((a, b) => {
					// Check if either item lacks a 'createdTime' and adjust sorting accordingly
					if (!a.createdTime) return 1; // a has no date, sort a to the bottom
					if (!b.createdTime) return -1; // b has no date, sort b to the bottom

					// Both items have a date, compare them as before
					const dateA = new Date(a.createdTime);
					const dateB = new Date(b.createdTime);

					return dateB - dateA;
				})
			},
			vAnnouncementsFilteredWithType() {
				if (this.theActiveFilterTypes.length < 1) {
					return this.vAnnouncements;
				} else {
					return this.vAnnouncements.filter(itemCase => {
						const hasNoSelectedType = this.theActiveFilterTypes.includes('v_no_selected');
						if (hasNoSelectedType && (!itemCase.type || itemCase.type === '')) {
							return true;
						}
						return this.theActiveFilterTypes.includes(itemCase.type);
					})
				}
			},
			vAnnouncementsFilteredWithPeriod() {
				if (this.theActiveFilterPeriod.startDate && this.theActiveFilterPeriod.endDate) {
					const startDate = new Date(this.theActiveFilterPeriod.startDate);
					startDate.setHours(23, 59, 59, 999);
					const endDate = new Date(this.theActiveFilterPeriod.endDate);
					endDate.setHours(0, 0, 0, 0);

					return this.vAnnouncementsFilteredWithType.filter(itemCase => {
						const createdTime = new Date(itemCase.createdTime);
						return createdTime >= endDate && createdTime <= startDate;
					});
				} else {
					return this.vAnnouncementsFilteredWithType;
				}
			},
			vAnnouncementsFilteredWithStatus() {
				if (this.theActiveFilterStatuses.length < 1) {
					return this.vAnnouncementsFilteredWithPeriod;
				} else {
					return this.vAnnouncementsFilteredWithPeriod.filter(itemCase => {
						const hasNoSelectedStatus = this.theActiveFilterStatuses.includes('v_no_selected');
						if (hasNoSelectedStatus && (!itemCase.status || itemCase.status === '')) {
							return true;
						}
						return this.theActiveFilterStatuses.includes(itemCase.status);
					})
				}
			},
			vAnnouncementsFilteredWithFrom() {
				if (this.theActiveFilterFrom.length < 1) {
					return this.vAnnouncementsFilteredWithPeriod;
				} else {
					return this.vAnnouncementsFilteredWithPeriod.filter(itemCase => {
						const hasNoSelectedFrom = this.theActiveFilterFrom.includes('v_no_selected');
						if (hasNoSelectedFrom && (!itemCase.from || itemCase.from === '')) {
							return true;
						}
						return this.theActiveFilterFrom.includes(itemCase.from);
					})
				}
			},
			searchedAnnouncements() {
				if (!this.searchQuery.trim()) {
					return this.vAnnouncementsFilteredWithStatus;
				}
				const searchLower = this.searchQuery.toLowerCase();
				return this.vAnnouncementsFilteredWithStatus.filter(announcement => {
					return Object.values(announcement).some(value => {
						return value && value.toString().toLowerCase().includes(searchLower);
					});
				});
			},
			filterFrom() {
				const uniqueTags = [{ value: 'v_no_selected', label: 'Uden fra', v_sort: true }]
				this.activeAnnouncements.forEach(ann => {
					const annFrom = ann['from']
					if (annFrom) {
						const idx = uniqueTags.findIndex(allTag => allTag.value === annFrom)
						if (idx < 0) {
							const tag = { value: annFrom, label: annFrom }
							uniqueTags.push(tag)
						}
					}
				})
				return uniqueTags;
			},
			filterStatuses() {
				const uniqueTags = [{ value: 'v_no_selected', label: 'Uden status', v_sort: true }]
				this.activeAnnouncements.forEach(ann => {
					const annStatus = ann['status']
					if (annStatus) {
						const idx = uniqueTags.findIndex(allTag => allTag.value === annStatus)
						if (idx < 0) {
							const tag = { value: annStatus, label: annStatus }
							uniqueTags.push(tag)
						}
					}
				})
				return uniqueTags;
			},
			filterTypes() {
				const uniqueTags = [{ value: 'v_no_selected', label: 'Uden type', v_sort: true }]
				this.activeAnnouncements.forEach(ann => {
					const annProp = ann['type']
					if (annProp) {
						const idx = uniqueTags.findIndex(allTag => allTag.value === annProp)
						if (idx < 0) {
							const tag = { value: annProp, label: annProp }
							uniqueTags.push(tag)
						}
					}
				})
				return uniqueTags;
			},
			filteredReceivers() {
				const arr = this.standardOptions && this.standardOptions['extMsg_Partners'] ? this.standardOptions['extMsg_Partners'] : []
				return arr.sort((a, b) => {
					if (a.type < b.type) return -1;
					if (a.type > b.type) return 1;
					return a.name.localeCompare(b.name);
				})
			},
			theActiveAnnouncement() {
				return this.theAnnActiveItem ? this.vAnnouncements.find(ann => ann.v_id === this.theAnnActiveItem) : null
			},
			isAnyFiltersActive() {
				return this.theActiveFilterFrom.length > 0 || this.theActiveFilterStatuses.length > 0 || this.theActiveFilterTypes.length > 0
			}
		},
		watch: {
			the_user(val) {
				console.log('THEUSER', val)
			},
			active_area() {
				this.updateFilters()
			}
		},
		methods: {
			set_change_the_filter_dates(dates) {
				this.theActiveFilterPeriod = dates;
			},
			set_change_the_active_filter_period_days(days) {
				this.theActiveFilterPeriodDays = days;
			},
			removeAllFilters() {
				const arr = ['theActiveFilterFrom', 'theActiveFilterStatuses', 'theActiveFilterTypes']
				arr.forEach(filterType => {
					this[filterType] = []
					this.setLocalStorageFilter(filterType, this[filterType])
				})
			},
			updateFilters() {
				this.theActiveFilterFrom = []
				this.theActiveFilterStatuses = []
				this.theActiveFilterTypes = []
				this.getLocalStorageFilter('theActiveFilterFrom')
				this.getLocalStorageFilter('theActiveFilterStatuses')
				this.getLocalStorageFilter('theActiveFilterTypes')
			},
			setIsListView(bool) {
				this.isListView = !this.isListView
			},
			onEditAnnouncementDone() {
				this.setEditAnnouncement(null)
			},
			setEditAnnouncement(item) {
				this.theEditAnnouncement = item
				if (item) {
					this.setIsCreateAnnouncementModal(true)
				}
			},
			setTheActiveSeeMoreCase(item) {
				this.theActiveSeeMoreCase = item
			},
			getisTheActiveCase(item) {
				return this.theAnnActiveItem === item.v_id
			},
			setActiveItem(item) {
				this.theActiveSeeMoreCase = null
				if (item == null) {
					this.theAnnActiveItem = null
					return
				}
				this.getAnnouncement(item.onid);
				if (this.theAnnActiveItem !== item.v_id) {
					this.theAnnActiveItem = item.v_id
				} else {
					this.theAnnActiveItem = null
				}
			},
			toggleFilterFrom(item) {
				this.toggleFilter('theActiveFilterFrom', item);
			},
			toggleFilterStatus(item) {
				this.toggleFilter('theActiveFilterStatuses', item);
			},
			toggleFilterTypes(item) {
				this.toggleFilter('theActiveFilterTypes', item);
			},
			toggleFilter(filterType, item) {
				const idx = this[filterType].indexOf(item.value);
				if (idx < 0) {
					this[filterType].push(item.value);
				} else {
					this[filterType].splice(idx, 1);
				}
				this.setLocalStorageFilter(filterType, this[filterType])
			},
			setLocalStorageFilter(filterType, filterArr) {
				const localTitle = this.active_area + '_' + filterType
				if (!filterArr || filterArr.length === 0) {
					localStorage.removeItem(localTitle)
				} else {
					localStorage.setItem(localTitle, JSON.stringify(filterArr))
				}
			},
			getLocalStorageFilter(filterType) {
				const localTitle = this.active_area + '_' + filterType
				if (localStorage.getItem(localTitle)) {
					this[filterType] = JSON.parse(localStorage.getItem(localTitle));
				}
			},
			clearSearchQuery() {
				if (this.$refs.v_ann_search_query) {
					this.$refs.v_ann_search_query.value = "";
				}
				this.searchQuery = "";
			},
			debounceSearch(e) {
				this.searchQuery = "",
					clearTimeout(this.debounce)
				this.debounce = setTimeout(() => {
					this.searchQuery = e.target.value
				}, 600)
			},
			getAnnouncements() {
				this.isLoadingAnnouncements = true;
				const myHeaders = new Headers();
				myHeaders.append("Accept", "application/json");
				myHeaders.append("PP_USER_KEY", eTrayWebportal.User.Key);
				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};
				fetch("https://dev-portal.opennet.dk/ppServices/api/extMsg", requestOptions)
					.then(response => {
						console.log('fetchAnnouncements::answer', response)
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json(); // Assuming the response is JSON formatted
					})
					.then(result => {
						this.announcements = result; // Assign the fetched data to the component's data property
						this.$emit('emit_announcements', this.announcements)
					})
					.catch(error => {
						console.error('Error:', error);
					})
					.finally(() => {
						this.isLoadingAnnouncements = false; // Ensure loading state is managed correctly
					});
			},
			getAnnouncement(pONID) {
				//this.isLoadingAnnouncements = true;
				//console.log('pONID',pONID)
				const myHeaders = new Headers();
				myHeaders.append("Accept", "application/json");
				myHeaders.append("PP_USER_KEY", eTrayWebportal.User.Key);
				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};
				const fetch_url = "https://dev-portal.opennet.dk/ppServices/api/extMsg?onid=" + pONID
				fetch(fetch_url, requestOptions)
					.then(response => {
						console.log('fetchAnnouncements::answer', response)
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json(); // Assuming the response is JSON formatted
					})
					.then(result => {
						this.onAddAnnouncements(result)
						//this.announcements.push(result)
						//this.announcements = result; // Assign the fetched data to the component's data property
						this.$emit('emit_announcements', this.announcements)
					})
					.catch(error => {
						console.error('Error:', error);
					})
					.finally(() => {
						this.isLoadingAnnouncements = false; // Ensure loading state is managed correctly
					});
			},
			setIsCreateAnnouncementModal(bool) {
				console.log('setIsCreateAnnouncementModal', bool)
				if (bool) {
					this.dataIsCreateAnnouncementModal = true
				} else {
					this.$emit('on_close_create_announcement_modal', false)
					this.dataIsCreateAnnouncementModal = false
					this.setActiveItem(null)
				}
			},
			setIsCreateNewMaster(bool) {
				if (bool) {
					this.isNewMasterModal = true
				} else {
					this.isNewMasterModal = false
				}
			},
			fetchStandardOptions() {
				this.isLoadingStandardOptions = true
				const myHeaders = new Headers();
				myHeaders.append("PP_USER_KEY", eTrayWebportal.User.Key);

				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://dev-portal.opennet.dk/ppServices/api/general/getFormDetails/all", requestOptions)
					.then(response => {
						console.log('fetchStandardOptions::answer', { response })
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(result => {
						console.log({ result })
						this.standardOptions = result
					})
					.catch(error => {
						console.error('Error fetching master templates data:', error);
					})
					.finally(() => {
						this.isLoadingStandardOptions = false
						this.fetchMasterTemplates()
					})
			},
			fetchMasterTemplates() {
				console.log('fetchMasterTemplates')
				this.isLoadingMasterTemplates = true
				const myHeaders = new Headers();
				myHeaders.append("PP_USER_KEY", eTrayWebportal.User.Key);
				myHeaders.append("Accept", "application/json");

				const requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};
				fetch("https://dev-portal.opennet.dk/ppServices/api/extMsg/mastertemplate", requestOptions)
					.then(response => {
						console.log('fetchMasterTemplates::answer', { response })
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(result => {
						this.masterTemplates = result;
					})
					.catch(error => {
						console.error('Error fetching master templates data:', error);
					})
					.finally(() => {
						this.isLoadingMasterTemplates = false;
						this.getAnnouncements()
					});
			},
			onDeleteMasterTemplate(deletedTemplateId) {
				const idx = this.masterTemplates.findIndex(masterTemp => masterTemp.template_id === deletedTemplateId)
				if (idx > -1) {
					this.masterTemplates.splice(idx, 1)
					if (this.masterTemplates.length > 0) {
						this.theNewMasterTemplateId = this.masterTemplates[this.masterTemplates.length - 1]['template_id']
					} else {
						this.theNewMasterTemplateId = null
					}
				}
			},
			onAddMasterTemplate(succesObj) {
				const arr = succesObj.success
				const updatedTemplateId = succesObj.updatedTemplateId
				arr.forEach(newMasterTemp => {
					const idx = this.masterTemplates.findIndex(masterTemp => masterTemp.template_id === newMasterTemp.template_id)
					if (idx < 0) {
						this.masterTemplates.push(newMasterTemp)
						this.theNewMasterTemplateId = newMasterTemp.template_id
					} else {
						this.masterTemplates.splice(idx, 1, newMasterTemp)
					}
					if (updatedTemplateId) {
						this.theNewMasterTemplateId = null
						setTimeout(_ => {
							this.theNewMasterTemplateId = updatedTemplateId
						}, 500)
					}
				})
			},
			onAddAnnouncements(arr) {
				console.log('onAddAnnouncements', arr, this.announcements)
				arr.forEach(obj => {
					const idx = this.announcements.findIndex(announcement => announcement.onid === obj.onid && +announcement.version === +obj.version)
					if (idx < 0) {
						this.announcements.push(obj)
					} else {
						this.announcements.splice(idx, 1, obj)
					}
				})
			},
			onSetEditMasterTemplate(template) {
				this.theEditMasterTemplate = template
			},
			fetchData() {
				this.isLoadingAnnouncements = true
				if (typeof ISLOCALHOST !== 'undefined') {
					this.masterTemplates = MASTERTEMPLATES
					this.announcements = ANNOUNCEMENTS
					this.isLoadingAnnouncements = false;
					this.standardOptions = JSON.parse(JSON.stringify(STANDARDOPTIONS))
					this.$emit('emit_announcements', this.announcements)
					return
				}
				this.fetchStandardOptions()
			},
			addDayJSFromCDN() {
				if (this.isDayJSLoadedToPage) {
					return;
				}
				const scriptsToLoad = [
					dayJsUrl,
					dayJsLocaleUrl,
					dayJsRelativeTimeUrl,
					dayJsLocalizedFormatUrl
				];

				const loadScript = (scriptUrl) => {
					return new Promise((resolve, reject) => {
						$.getScript(scriptUrl, (e, t, s) => {
							resolve();
						}).fail((jqxhr, settings, exception) => {
							reject(exception);
						});
					});
				};

				scriptsToLoad.reduce((prevPromise, scriptUrl) => {
					return prevPromise.then(() => loadScript(scriptUrl));
				}, Promise.resolve())
					.then(() => {
						dayjs.locale('da');
						dayjs.extend(window.dayjs_plugin_relativeTime);
						dayjs.extend(window.dayjs_plugin_localizedFormat);
						this.isDayJSLoadedToPage = true;
						console.log('DayJS and plugins loaded successfully.');
					})
					.catch(error => {
						console.error('Error loading DayJS scripts:', error);
					});
			},
			onNewQuestionSubmitted(onid) {
				const toastText = 'Tak for et spørgsmål som oprettet på Partnerportal sag med ONID:' + onid + '.';
				this.$emit('on_new_question_submitted', toastText)
			}
		},
		beforeMount() {
			this.addDayJSFromCDN();
		},
		mounted() {
			this.fetchData()
			addPurifyFromCDN();
			this.updateFilters();
		}
	})
	Vue.component('o-email', {
		template: '#o-email-template',
		props: {
			email: {
				default: null
			},
			is_earlier_version: {
				type: Boolean,
				default: false
			},
			the_user_type: {
				type: String
			}
		},
		computed: {
			sanitizedHtml() {
				return this.email.html
			}
		},
		methods: {
			adjustIframeHeight() {
				const iframe = this.$refs.iframe;
				if (iframe.contentWindow.document.body) {
					iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 20 + 'px';
				}
			},
			downloadFile(file) {
				const fileId = file.fileId;
				const fileToken = file.fileToken;
				const PP_userKEY = eTrayWebportal.User.Key; // Assuming this correctly obtains the PP_userKEY
				const myHeaders = new Headers();
				myHeaders.append("PP_USER_KEY", PP_userKEY);
				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};
				const url = `https://dev-portal.opennet.dk/ppServices/api/general/ePath?fileId=${fileId}&fileToken=${fileToken}`;

				fetch(url, requestOptions)
					.then(response => response.json())
					.then(result => {
						if (result.ePath) {
							download_file(result.ePath); // Assuming download_file is a method in this Vue component
						} else {
							console.error('ePath not found in the result');
						}
					})
					.catch(error => console.error(error));
			}
		}
	})
	Vue.component('o-announcements-metrics', {
		template: '#o-announcements-metrics-template',
		props: {
			announcements: {
				default: () => []
			},
			error_reports: {
				default: () => []
			},
			active_category: {
				default: 'OperationsStatus' // OperationsStatus, News etc.
			},
			is_error_reports_loading: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			news() {
				return this.announcements.filter(ann => ann.area == 'News')
			},
			operationsAnnouncements() {
				return this.announcements.filter(ann => ann.area == 'OperationsStatus')
			},
			errorReports() {
				return this.error_reports
			},
			errorReportsPastSLA() {
				return this.errorReports.filter(errorReport => errorReport.sla_past_deadline == 'true')
			},
			incidents() {
				const types = ['Incident Prod']
				return this.operationsAnnouncements.filter(ann => types.indexOf(ann.type) > -1)
			},
			planned() {
				const types = ['Driftsudmelding']
				return this.operationsAnnouncements.filter(ann => types.indexOf(ann.type) > -1)
			},
			other() {
				const types = ['IT-Production Planned']
				return this.operationsAnnouncements.filter(ann => types.indexOf(ann.type) > -1)
			},
			newsCampaigns() {
				const types = ['Kampagner']
				return this.news.filter(ann => types.indexOf(ann.type) > -1)
			},
			newsEquipments() {
				const types = ['IT']
				return this.news.filter(ann => types.indexOf(ann.type) > -1)
			},
			newsOther() {
				const types = ['Nyudrulning']
				return this.news.filter(ann => types.indexOf(ann.type) > -1)
			}
		}
	})
	Vue.component('o-range-slider', {
		template: '#o-range-slider-template',
		props: {
			active_area: {
				default: 'OperationsStatus' // 'OperationsStatus' or 'News'
			}
		},
		data() {
			return {
				indicatorWidth: 400,
				days: 90,
				startDay: 0,
				endDay: 90,
				dragging: null,
				theActiveFilterPeriodDays: 90
			}
		},
		computed: {
			startDayDateLabel() {
				return this.startDay === 0 ? 'Nu' : this.startDay === 1 ? '1 dag siden' : this.startDay + ' dage siden'
			},
			endDayDateLabel() {
				return this.endDay === 1 ? '1 dag siden' : this.endDay + ' dage siden'
			},
			startDayDate() {
				const date = new Date();
				date.setDate(date.getDate() - this.startDay);
				return this.formatDate(date);
			},
			endDayDate() {
				const date = new Date();
				date.setDate(date.getDate() - this.endDay);
				return this.formatDate(date);
			},
			oneDay() {
				return this.indicatorWidth / this.days;
			},
			oneDayInPercentage() {
				return 100 / this.days;
			},
			progressStyle() {
				return {
					left: (this.startDay * this.oneDayInPercentage) + '%',
					width: ((this.endDay - this.startDay) * this.oneDayInPercentage) + '%'
				}
			},
			leftPosition() {
				return {
					left: (this.startDay * this.oneDayInPercentage) + '%',
				}
			},
			rightPosition() {
				return {
					left: ((this.endDay) * this.oneDayInPercentage) + '%'
				}
			}
		},
		watch: {
			active_area() {
				this.initDates()
			}
		},
		methods: {
			setLocalStorageFilter(filterType, filterArr) {
				const localTitle = this.active_area + '_' + filterType
				if (!filterArr || filterArr.length === 0) {
					localStorage.removeItem(localTitle)
				} else {
					localStorage.setItem(localTitle, JSON.stringify(filterArr))
				}
			},
			getLocalStorageFilter(filterType) {
				const localTitle = this.active_area + '_' + filterType
				if (localStorage.getItem(localTitle)) {
					this[filterType] = JSON.parse(localStorage.getItem(localTitle));
				}
			},
			formatDate(date) {
				const today = new Date();
				const comparisonDate = new Date(date);

				const formattedToday = today.toLocaleDateString('da-DK');
				const formattedDate = comparisonDate.toLocaleDateString('da-DK');

				return formattedDate;
			},
			startDrag(which) {
				this.dragging = which;
				document.addEventListener('mousemove', this.onDrag);
				document.addEventListener('mouseup', this.stopDrag);
			},
			onDrag(event) {
				if (!this.dragging) return;
				const rect = this.$el.getBoundingClientRect();
				const offset = event.clientX - rect.left; // mouse position relative to the slider
				const day = Math.round(offset / this.oneDay);

				if (this.dragging === 'start') {
					if (day > this.endDay) {
						this.startDay = this.endDay - 1;
						return
					}
					if (day >= 0) {
						this.startDay = day;
					} else {
						this.startDay = 0
					}

				} else if (this.dragging === 'end') {
					if (day <= this.startDay) {
						this.endDay = this.startDay + 1;
						return
					}
					if (day <= this.days) {
						this.endDay = day;
					} else {
						this.endDay = 90
					}
				}
			},
			stopDrag() {
				document.removeEventListener('mousemove', this.onDrag);
				document.removeEventListener('mouseup', this.stopDrag);
				this.dragging = null;

				this.setLocalStorageFilter('theActiveFilterPeriod', { startDay: this.startDay, endDay: this.endDay })
				this.setTheActiveFilterPeriod()
			},
			setTheActiveFilterPeriod() {
				this.theActiveFilterPeriodDays = this.endDay - this.startDay
				this.$emit('on_change_the_active_filter_period_days', this.theActiveFilterPeriodDays);

				const startDate = new Date();
				startDate.setDate(startDate.getDate() - this.startDay);
				const endDate = new Date();
				endDate.setDate(endDate.getDate() - this.endDay);
				this.$emit('on_change_the_filter_dates', { startDate: startDate, endDate: endDate });
			},
			initDates() {
				const localStr = localStorage.getItem(this.active_area + '_theActiveFilterPeriod')
				if (localStr) {
					const days = JSON.parse(localStr)
					this.startDay = days.startDay
					this.endDay = days.endDay
					this.setTheActiveFilterPeriod()
				} else {
					this.startDay = 0
					this.endDay = 90
					this.setTheActiveFilterPeriod()
				}
			}
		},
		beforeMount() {
			this.initDates()
		}
	})

	Vue.component('o-announcement-view-modal', {
		template: '#o-announcement-view-modal-template',
		props: {
			announcement: {
				default: () => { }
			},
			the_user_type: {
				default: null
			},
			the_active_see_more_case: {
				default: null
			},
			active_area: {
				default: 'OperationsStatus' // 'OperationsStatus' or 'News'
			}
		},
		data() {
			return {
				activeAnnouncement: null,
				question: '',
				isSubmitting: false
			}
		},
		methods: {
			setIsAskQuestionModal(announcement) {
				if (announcement) {
					this.activeAnnouncement = announcement
					this.$nextTick(() => {
						this.$refs.question_textarea.focus()
					})
				} else {
					this.activeAnnouncement = null
				}
			},
			submitQuestion(announcement) {
				this.isSubmitting = true
				if (this.question.length < 1) {
					this.isSubmitting = false
					this.$refs.question_textarea.focus()
					return
				}
				const onId = announcement.onid
				console.log(this.question)
				// wating for the API
				setTimeout(() => {
					this.isSubmitting = false
					this.setIsAskQuestionModal(null)
					this.$emit('new_question_submitted', onId)
					this.question = ''
				}, 1500)
			}
		}
	})

	Vue.component('o-announcements-modal', {
		template: '#o-announcements-modal-form-template',
		props: {
			formType: {
				default: 'announcement' // 'master', 'announcement'
			},
			formTitle: {
				default: 'Create announcement'
			},
			standard_options: {
				default: () => { }
			},
			filteredReceivers: {
				default: () => []
			},
			master_templates: {
				default: () => []
			},
			edit_master_template: {
				default: null
			},
			theNewMasterTemplateId: {
				default: null
			},
			the_user: {
				default: () => { }
			},
			active_area: {
				default: 'OperationsStatus' // 'OperationsStatus' or 'News'
			},
			edit_announcement: {
				default: null
			},
			the_active_company_name: {
				default: '' // 'SP Dev Company', 'IO Dev Company', 'Opennet' etc.
			}
		},
		data() {
			return {
				activeMasterTemplateId: null,
				theEmailHTML: '',
				newMasterTitle: '',
				isSubmitting: false,
				isUpdateSubscription: false,
				updateSubscriptionInterval: null,
				updateSubscriptionUserId: this.the_user ? this.the_user.id : null,
				isAttachFiles: false,
				attachments: null,
				isSendNotifications: false,
				theSelectedStatus: 'New',
				theEmailDateStart: new Date().toISOString().slice(0, 10),
				theEmailSubject: '',
				theEmailFromCompany: '',
				theSelectedType: null,
				updateIntervals: [
					{ value: '15', display: '15min' },
					{ value: '30', display: '30min' },
					{ value: '60', display: '1 time' },
					{ value: '180', display: '3 time' },
					{ value: '360', display: '6 time' },
					{ value: '720', display: '12 time' },
					{ value: '1440', display: '24 time' },
					{ value: '4320', display: '3 dage' },
					{ value: '10080', display: '7 dage' },
					{ value: '43200', display: '30 dage' },
					{ value: '129600', display: '90 dage' }
				],
				selectedReceivers: {},
				isCreatingNewAnnouncement: false,
				placeholders: [
					{ id: '{{{pp_mergecode:placeholder1}}}', num: 1, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder1}}}', isShow: false },
					{ id: '{{{pp_mergecode:placeholder2}}}', num: 2, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder2}}}', isShow: false },
					{ id: '{{{pp_mergecode:placeholder3}}}', num: 3, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder3}}}', isShow: false },
					{ id: '{{{pp_mergecode:placeholder4}}}', num: 4, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder4}}}', isShow: false },
					{ id: '{{{pp_mergecode:placeholder5}}}', num: 5, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder5}}}', isShow: false },
					{ id: '{{{pp_mergecode:placeholder6}}}', num: 6, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder6}}}', isShow: false },
					{ id: '{{{pp_mergecode:placeholder7}}}', num: 7, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder7}}}', isShow: false },
					{ id: '{{{pp_mergecode:placeholder8}}}', num: 8, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder8}}}', isShow: false },
					{ id: '{{{pp_mergecode:placeholder9}}}', num: 9, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder9}}}', isShow: false },
					{ id: '{{{pp_mergecode:placeholder10}}}', num: 10, text: '', placeholder: 'Tekst til {{{pp_mergecode:placeholder10}}}', isShow: false }
				],
				placeholderHist: null,
				activeTab: 'placeholders',
				isServiceWindow: false,
				serviceWindowStartFlatPicker: new Date(),
				serviceWindowEndFlatPicker: new Date(),
				theEditMasterTemplate: null,
				isDeleting: false,
				isConfirmation: false,
				attachFilesObserver: null,
				theEmailTeaser: '',
				shortcuts: [
					['{{{pp_mergecode:subject}}}',
						'{{{pp_mergecode:type}}}',
						'{{{pp_mergecode:onid}}}',
						'{{{pp_mergecode:status}}}',
						'{{{pp_mergecode:from}}}',
						'{{{pp_mergecode:user_name}}}',
						'{{{pp_mergecode:teaser}}}',
						'{{{pp_mergecode:service_window_start}}}',
						'{{{pp_mergecode:service_window_end}}}'
					],
					['{{{pp_mergecode:placeholder1}}}'],
					['{{{pp_mergecode:history_placeholder1}}}'],
					['{{{pp_hasdata:history_placeholder1}}}',
						'{{{end:pp_hasdata:history_placeholder1}}}'
					]
				],
				flatPickerConfig: {
					enableTime: true,
					dateFormat: 'd/m/Y H:i',
					time_24hr: true,
					minuteIncrement: 30
				},
				quillInstances: {},
				versionHistPlaceholder: {},
				changedPlaceholders: {},
				attachmentToken: null,
				isShowAddFiles: false,
				addFilesToCase: '',
				isShowAddFilesNotAnswered: false,
				thePlaceholdersToShowHtml: {},
				thePlaceholderLabels: {}
			}
		},
		computed: {
			receiversFilterFromSelf() {
				const arrOfIds = ['ON']
				const newArr = this.filteredReceivers.filter(receiver => arrOfIds.indexOf(receiver.id) < 0)
				const arrOfNames = [this.the_active_company_name]
				return newArr.filter(receiver => arrOfNames.indexOf(receiver.name) < 0)
			},
			isAllReceiversSelected() {
				return this.getIsReceiverSelected('ALL')
			},
			isAllSPsSelected() {
				return this.getIsReceiverSelected('ALL_SPs')
			},
			isAllIOsSelected() {
				return this.getIsReceiverSelected('ALL_IOs')
			},
			activePlaceholders() {
				return this.placeholders.filter(place => place.isShow)
			},
			formTypeIsMaster() {
				return this.formType === 'master'
			},
			newMasterHTMLSanitized() {
				return this.theEmailHTML
			},
			serviceWindowStart() {
				const dateString = this.serviceWindowStartFlatPicker
				return flatpickr.parseDate(dateString, 'd/m/Y H:i'); // JS dateObject
			},
			serviceWindowEnd() {
				const dateString = this.serviceWindowEndFlatPicker
				return flatpickr.parseDate(dateString, 'd/m/Y H:i'); // JS dateObject
			},
			emailServiceWindowStart() {
				return this.isServiceWindow ? dayjs(this.serviceWindowStart).format('LLL') : ''
			},
			emailServiceWindowEnd() {
				return this.isServiceWindow ? dayjs(this.serviceWindowEnd).format('LLL') : ''
			},
			contentReplacement() {
				if (this.formTypeIsMaster) {
					return {};
				}

				let replacements = {
					...this.theSelectedType ? {
						type: this.filteredTypes.find(oType => oType.value === this.theSelectedType)?.display || this.theSelectedType
					} : {},
					...this.emailServiceWindowStart ? { service_window_start: this.emailServiceWindowStart } : { service_window_start: '' },
					...this.emailServiceWindowEnd ? { service_window_end: this.emailServiceWindowEnd } : { service_window_end: '' },
					...this.theEmailSubject ? { subject: this.theEmailSubject } : { subject: '' },
					...this.theSelectedStatus ? { status: this.theSelectedStatus } : { status: '' },
					...this.theEmailFromCompany ? { from: this.theEmailFromCompany } : { from: '' },
					...this.theEmailFromUser ? { user_name: this.theEmailFromUser } : { user_name: '' },
					...this.theEmailTeaser ? { teaser: this.theEmailTeaser } : { teaser: '' },
					...Object.fromEntries(this.activePlaceholders.map(place => [`placeholder${place.num}`, place.text])),
					...Array.from({ length: 10 }, (_, i) => i + 1).reduce((acc, num) => {
						const history = this.replaceHistoryPlaceholderWithTable(`placeholder${num}`);
						if (history) {
							acc[`history_placeholder${num}`] = history;
						}
						return acc;
					}, {})
				};

				return replacements;
			},
			emailHistoryPlaceholders() {
				let arr = []
				if (!this.placeholderHist) {
					return arr
				}

				Object.keys(this.placeholderHist).forEach(prop => {
					if (this.placeholderHist[prop] && this.placeholderHist[prop].length > 0) {
						arr.push(prop)
					}
				});
				return arr
			},
			emailHTMLReplaced() {
				const placeholderToRemove = ['placeholder1', 'placeholder2', 'placeholder3', 'placeholder4', 'placeholder5', 'placeholder6', 'placeholder7', 'placeholder8', 'placeholder9', 'placeholder10']
				let html = this.newMasterHTMLSanitized ? this.newMasterHTMLSanitized : ''
				if (this.emailHistoryPlaceholders.length > 0) {
					this.emailHistoryPlaceholders.forEach(placeholderName => {
						const idx = placeholderToRemove.indexOf(placeholderName)
						if (idx > -1) {
							placeholderToRemove.splice(idx, 1)
						}
						html = this.removeFilledHistoryPlaceholderLabels(html, 'history_' + placeholderName)
					})
				}
				placeholderToRemove.forEach(placeholderName => {
					html = this.removeEmptyHistoryPlaceholder(html, 'history_' + placeholderName)
				})
				const placeholderHTML = this.replacePlaceholders(html, this.contentReplacement);
				return placeholderHTML
			},
			iframeContent() {
				let htmlContent = this.emailHTMLReplaced
				const script1 = `<script>
				window.onload = function() {
					const height = document.documentElement.scrollHeight;
					window.parent.postMessage({ type: 'oiFrameHeight', frameHeight: height }, '*');
				};
				</script>
				`
				const script2 = `<script>
				window.onload = function() {
					const height = document.documentElement.scrollHeight;
					window.parent.postMessage({ type: 'oiFrameHeightMaster', frameHeight: height }, '*');
				};
				</script>
				`
				const script = this.formTypeIsMaster ? script2 : script1
				// Insert the script before the closing </body> tag
				if (htmlContent.includes('</body>')) {
					htmlContent = htmlContent.replace('</body>', script + '</body>');
				} else {
					htmlContent += script;
				}

				return htmlContent;
			},
			emailHTMLAllPlaceholdersReplaced() {
				// Removes all {{{ }}}
				return this.emailHTMLReplaced.replace(/\{\{\{[^}]+\}\}\}/g, '');
			},
			userKey() {
				return eTrayWebportal && eTrayWebportal.User.Key ? eTrayWebportal.User.Key : null
			},
			theEmailFromUser() {
				return this.the_user && this.the_user['display_name'] ? this.the_user['display_name'] : ''
			},
			sortedMasterTemplates() {
				return this.master_templates
					.filter(masterTemp => masterTemp.area === this.active_area)
					.sort((a, b) => b.template_id - a.template_id);
			},
			filteredTypes() {
				const allTypes = []
				const oTypes = this.standard_options && this.standard_options['extMsg_type'] ? this.standard_options['extMsg_type'] : []
				oTypes.forEach(oType => {
					if (oType.area === this.active_area) {
						const idx = allTypes.findIndex(allType => allType.value === oType.value)
						if (idx < 0) {
							allTypes.push(oType)
						}
					}
				})
				return allTypes.sort((a, b) => a.display.localeCompare(b.display))
			},
			filteredStatusses() {
				const oStatusses = this.standard_options && this.standard_options['extMsg_status'] ? this.standard_options['extMsg_status'] : []
				return oStatusses
			},
			filteredStatussesNews() {
				const oStatussesNews = this.standard_options && this.standard_options['extMsg_status_news'] ? this.standard_options['extMsg_status_news'] : []
				return oStatussesNews
			},
			selectedReceiversLength() {
				return Object.keys(this.selectedReceivers).length;
			},
			filteredAssignUpdatesToList() {
				const arr = this.standard_options && this.standard_options['assigntoList'] ? this.standard_options['assigntoList'] : []
				return arr.sort((a, b) => {
					return a.Name.localeCompare(b.Name);
				})
			},
			receiverNames() {
				const names = [];
				const potentialReceivers = [{ id: 'ALL', name: 'Alle' }, { id: 'ALL_SPs', name: 'Alle SPs' }, { id: 'ALL_IOs', name: 'Alle IOs' }].concat(this.filteredReceivers)
				Object.keys(this.selectedReceivers).forEach(key => {
					const idx = potentialReceivers.findIndex(user => user.id === key);
					if (idx > -1) {
						names.push(potentialReceivers[idx]['name']);
					}
				});
				return names.join(', ')
			},
			theFormTitle() {
				if (!this.formTypeIsMaster) {
					if (this.edit_announcement) {
						const versionNumber = +this.edit_announcement['version'] + 1
						return this.active_area === 'News' ? 'Rediger nyhed' : 'Ny udmelding (version nr. ' + versionNumber + ')'
					} else {
						return this.active_area === 'News' ? 'Opret nyhed' : 'Opret udmelding'
					}
				} else {
					if (!this.edit_master_template) {
						return 'Opret nyt template'
					} else {
						return 'Rediger template'
					}
				}
			},
			isSaveButtonValid() {
				return !this.getIsFormInvalid()
			}
		},
		watch: {
			theNewMasterTemplateId(val) {
				if (val) {
					this.setMasterTemplate(val)
				}
			},
			'activeMasterTemplateId': {
				immediate: true, // Run the handler immediately, not just when it changes
				handler(newValue, oldValue) {
					this.$nextTick(() => {
						this.initializeQuillEditors();
					});
				}
			},
			theEmailHTML(val) {
				// Find number of placeholders
				if (!this.theEmailHTML) {
					return
				}
				const htmlContent = this.theEmailHTML
				const contentWithoutSpaces = htmlContent.replace(/\s+/g, '')
				for (let i = 1; i <= 10; i++) {
					const id = '{{{pp_mergecode:placeholder' + i + '}}}'
					const regex = new RegExp(`\\{\\{\\{pp_mergecode:placeholder${i}\\}\\}\\}`, 'g')
					const matches = contentWithoutSpaces.match(regex)
					const idx = this.placeholders.findIndex(place => place.id === id)
					if (idx > -1) {
						if (matches) {
							this.placeholders[idx]['isShow'] = true
						} else {
							this.placeholders[idx]['isShow'] = false
						}
					}
				}
			}
		},
		methods: {
			onEditPlaceholderLabel(activePlaceholderId, val) {
				if (val && val.length > 0) {
					this.$set(this.thePlaceholderLabels, activePlaceholderId, val)
				} else {
					this.$delete(this.thePlaceholderLabels, activePlaceholderId)
				}
				console.log('this.thePlaceholderLabels', this.thePlaceholderLabels)
			},
			setThePlaceholdersToShowHtml(num, showHtml) {
				if (!showHtml && this.thePlaceholdersToShowHtml[num]) {
					this.$delete(this.thePlaceholdersToShowHtml, num);
				} else {
					this.$set(this.thePlaceholdersToShowHtml, num, showHtml);
					this.$nextTick(() => {
						const el = document.querySelector('.o-placeholder_' + num)
						if (el) {
							el.focus()
						}
					})
				}
			},
			setAddFilesToCase(val) {
				this.addFilesToCase = val
				this.isShowAddFilesNotAnswered = false
			},
			setInitialServiceWindowDates() {
				// Set the start of the service window to the next whole hour
				const now = new Date();
				now.setHours(now.getHours() + 1);
				now.setMinutes(0);
				now.setSeconds(0);
				now.setMilliseconds(0);
				this.serviceWindowStartFlatPicker = now;

				// Set the end of the service window to 7 days from now
				const sevenDaysLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
				this.serviceWindowEndFlatPicker = sevenDaysLater;
			},
			async copyTextToClipboard(text) {
				try {
					await navigator.clipboard.writeText(text);
					this.$emit('onCopy', 'Kopieret ' + text)
				} catch (err) {
					this.$emit('onCopy', 'Kunne ikke kopiere')
					console.error('Failed to copy text: ', err);
				}
			},
			replaceHistoryPlaceholderWithTable(historyPlaceholderName) {
				if (!this.placeholderHist || this.placeholderHist.length < 1) {
					return null;
				}
				let str = '';
				if (this.placeholderHist[historyPlaceholderName]) {
					this.placeholderHist[historyPlaceholderName].forEach(obj => {
						let date = obj['time'] ? obj['time'] : '';
						if (date.length > 0) {
							date = dayjs ? dayjs(date).format('LLL') : date
						}
						const text = obj['text'] ? obj['text'] : '';
						const status = obj['status'] ? obj['status'] : '';
						const statusStr = status.length > 0 ? '<td style="border: 1px solid #eee;padding: 10px 20px;">' + status + '</td>' : ''
						str += '<tr><td style="border: 1px solid #eee;padding: 10px 20px;">' + date + '</td><td style="border: 1px solid #eee;padding: 10px 20px;">' + text + '</td>' + statusStr + '</tr>';
					});
				}
				const tableHTML = '<table style="border-collapse: collapse;"><thead></thead><tbody>' + str + '</tbody></table>';
				return tableHTML;
			},
			getIsFormInvalid() {
				const errors = {}
				if (this.formTypeIsMaster) {
					if (this.newMasterTitle.length === 0) {
						errors['master_title'] = 'Der skal være en titel'
					}
					return Object.keys(errors).length > 0
				}
				// Not master validation
				if (this.selectedReceiversLength === 0) {
					errors['receivers'] = 'Der skal vælges mindst en modtager'
				}
				return Object.keys(errors).length > 0
			},
			setIsDeleteConfirmation(bool) {
				this.isConfirmation = bool
			},
			deleteMasterTemplate() {
				this.isDeleting = true
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("PP_USER_KEY", eTrayWebportal.User.Key);
				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					redirect: "follow"
				};

				const url = 'https://dev-portal.opennet.dk/ppServices/api/extMsg/mastertemplate?action=DELETE&template_id=' + this.edit_master_template

				fetch(url, requestOptions)
					.then(response => {
						console.log('deleteMasterTemplate', { response })
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(success => {
						console.log({ success })
						this.$emit('deleteMasterTemplate', this.edit_master_template)
					})
					.catch(error => {
						console.error('Error creating new announcement:', error);
					})
					.finally(() => {
						this.isDeleting = false
						this.setIsCreateModal(false)
					});
			},
			setEditMasterTemplate(template) {
				this.$emit('setEditMasterTemplate', template)
				this.setIsCreateNewMaster(true)
			},
			formatDate(date) {
				// Format dates as "YYYY-MM-DD"
				const year = date.getFullYear();
				const month = String(date.getMonth() + 1).padStart(2, '0')
				const day = String(date.getDate()).padStart(2, '0')
				return `${year}-${month}-${day}`;
			},
			setActiveTab(tabName) {
				return this.activeTab = tabName
			},
			getIsActiveTab(tabName) {
				return this.activeTab === tabName
			},
			replacePlaceholders(html, replacements) {
				Object.entries(replacements).forEach(([key, value]) => {
					const regex = new RegExp(`{{\\{\\s*pp_mergecode:${key}\\s*\\}\\}}`, 'g')
					html = html.replace(regex, value)
				});
				return html
			},
			removeFilledHistoryPlaceholderLabels(html, placeholderName) {
				if (this.formTypeIsMaster) {
					return html;
				}
				// Updated regex to allow for optional spaces around "end:"
				var startMarkerRegex = new RegExp(`\\{\\{\\{\\s*pp_hasdata:${placeholderName}\\}\\}\\}`, 'g');
				var endMarkerRegex = new RegExp(`\\{\\{\\{\\s*end\\s*:\\s*pp_hasdata:${placeholderName}\\s*\\}\\}\\}`, 'g');

				// Use regex to replace the start and end markers with an empty string
				html = html.replace(startMarkerRegex, '');
				html = html.replace(endMarkerRegex, '');
				return html;
			},

			removeEmptyHistoryPlaceholder(html, placeholderName) {
				if (this.formTypeIsMaster) {
					return html;
				}
				// Updated regex to include optional spaces around "end:"
				var startMarkerRegex = new RegExp(`\\{\\{\\{\\s*pp_hasdata:${placeholderName}\\}\\}\\}`, 'g');
				var endMarkerRegex = new RegExp(`\\{\\{\\{\\s*end\\s*:\\s*pp_hasdata:${placeholderName}\\s*\\}\\}\\}`, 'g');

				var startIndex = html.search(startMarkerRegex);
				var match = html.match(endMarkerRegex);

				if (startIndex !== -1 && match) {
					var endIndex = html.indexOf(match[0], startIndex) + match[0].length;
					// Remove the section from startIndex to endIndex
					return html.slice(0, startIndex) + html.slice(endIndex);
				} else {
					return html;
				}
			},
			createMasterTemplate() {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("PP_USER_KEY", eTrayWebportal.User.Key);

				let dbObj = {
					template_id: null,
					name: this.newMasterTitle,
					company_display: this.theEmailFromCompany,
					subject: this.theEmailSubject,
					area: this.active_area,
					type: this.theSelectedType,
					receivers: Object.keys(this.selectedReceivers).map(key => key).join(';'),
					send_notifications: this.isSendNotifications,
					attachments: null,
					html: this.newMasterHTMLSanitized,
					placeholder_labels: this.thePlaceholderLabels
				};
				if (this.edit_master_template) {
					dbObj['template_id'] = this.edit_master_template
				}

				console.log("dbObj", dbObj)
				console.log("this.thePlaceholderLabels", this.thePlaceholderLabels)
				const raw = JSON.stringify(dbObj)
				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};
				let url = 'https://dev-portal.opennet.dk/ppServices/api/extMsg/mastertemplate'

				if (this.edit_master_template) {
					url = 'https://dev-portal.opennet.dk/ppServices/api/extMsg/mastertemplate?action=PATCH'
				}

				fetch(url, requestOptions)
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(success => {
						const succesObj = {
							success: success,
							updatedTemplateId: this.edit_master_template ? this.edit_master_template : null
						}
						this.$emit('addMasterTemplate', succesObj)
					})
					.catch(error => {
						console.error('Error creating new announcement:', error);
					})
					.finally(() => {
						this.isSubmitting = false
						this.setIsCreateModal(false)
					});
			},
			createAnnouncement() {
				this.attachmentToken = null;
				const uploadedPanel = document.querySelector('.ppUPLOAD #uploadedPanel');
				const initialLengthOfAttachedFiles = uploadedPanel ? uploadedPanel.children.length : 0;
				if (initialLengthOfAttachedFiles > 0) {
					if (this.addFilesToCase === '') {
						this.isShowAddFilesNotAnswered = true
						this.isSubmitting = false
						return
					}
					clearJSONfields();
					this.attachmentToken = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
					$(".ppUPLOAD_TOKEN > input").val(this.attachmentToken);
					$(".webformCreateMore").click();

					const observer = new MutationObserver((mutations) => {
						mutations.forEach((mutation) => {
							if (mutation.type === "childList") {
								const currentLengthOfAttachedFiles = mutation.target.children.length;
								if (currentLengthOfAttachedFiles !== initialLengthOfAttachedFiles) {
									observer.disconnect(); // Stop observing
									this.proceedWithAnnouncement(); // Proceed with the rest of the method
								}
							}
						});
					});
					const config = { childList: true };
					observer.observe(uploadedPanel, config);
				} else {
					// Directly proceed if no files need to be uploaded
					this.proceedWithAnnouncement();
				}
			},
			proceedWithAnnouncement() {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("PP_USER_KEY", eTrayWebportal.User.Key);

				const timestamp = getCurrentTimestamp();
				function getCurrentTimestamp() {
					const now = new Date();
					const year = now.getFullYear();
					const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-indexed
					const day = String(now.getDate()).padStart(2, '0');
					const hours = String(now.getHours()).padStart(2, '0');
					const minutes = String(now.getMinutes()).padStart(2, '0');
					const seconds = String(now.getSeconds()).padStart(2, '0');

					return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
				}
				const selectedType = this.filteredTypes.find(oType => oType.value === this.theSelectedType)
				let dbObj = {
					"onid": null,
					"version": null,
					"createdTime": timestamp,
					"expired": "false",
					"area": this.active_area,
					"type": selectedType && selectedType.display ? selectedType.display : this.theSelectedType,
					"template_id": this.activeMasterTemplateId,
					"from": this.the_user && this.the_user['display_name'] ? this.the_user['display_name'] : '',
					"company_display": this.theEmailFromCompany,
					"subject": this.theEmailSubject,
					"shortDesc": this.active_area === 'News' && this.theEmailTeaser.length > 0 ? this.theEmailTeaser : null,
					"status": this.theSelectedStatus,
					"serviceWindow": this.isServiceWindow,
					"serviceWindowStart": this.isServiceWindow ? this.serviceWindowStart : null,
					"serviceWindowEnd": this.isServiceWindow ? this.serviceWindowEnd : null,
					"updateSubscription": this.isUpdateSubscription,
					"updateSubscriptionInterval": !this.isUpdateSubscription ? null : this.updateSubscriptionInterval,
					"updateSubscriptionUserId": !this.isUpdateSubscription ? null : this.updateSubscriptionUserId,
					"receivers": Object.keys(this.selectedReceivers).map(key => key).join(';'),
					"attachments": this.attachmentToken ? [this.attachmentToken] : null,
					"attachments_in_email": this.addFilesToCase == 'true' ? true : false,
					"html": this.emailHTMLAllPlaceholdersReplaced,
					"placeholder_1": null,
					"placeholder_2": null,
					"placeholder_3": null,
					"placeholder_4": null,
					"placeholder_5": null,
					"placeholder_6": null,
					"placeholder_7": null,
					"placeholder_8": null,
					"placeholder_9": null,
					"placeholder_10": null,
					"placeholder_hist": null
				};
				this.activePlaceholders.forEach(placeholder => {
					const placeHolderKey = 'placeholder_' + placeholder.num
					dbObj[placeHolderKey] = placeholder.text
				})
				const fncConvertNullsToEmptyArrays = (obj) => {
					Object.keys(obj).forEach(key => {
						if (obj[key] === null) {
							obj[key] = [];
						}
					});
					return obj;
				}
				if (this.edit_announcement) {
					dbObj['onid'] = this.edit_announcement.onid
					dbObj['placeholder_hist'] = JSON.stringify(fncConvertNullsToEmptyArrays(this.placeholderHist))
				}
				console.log({ dbObj })
				const raw = JSON.stringify(dbObj)

				let requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};
				let url = 'https://dev-portal.opennet.dk/ppServices/api/extMsg'

				if (this.edit_announcement) {
					url = 'https://dev-portal.opennet.dk/ppServices/api/extMsg?action=PATCH'
				}
				fetch(url, requestOptions)
					.then(response => {
						console.log('createAnnouncement', { response })
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(success => {
						console.log({ success })
						this.$emit('addAnnouncements', success)
					})
					.catch(error => {
						console.error('Error creating new announcement:', error);
					})
					.finally(() => {
						this.isSubmitting = false
						this.setIsCreateModal(false)
					});
			},
			onSubmit() {
				if (this.getIsFormInvalid()) {
					this.isShowErrors = true
					return
				}
				this.isSubmitting = true
				if (this.formTypeIsMaster) {
					this.createMasterTemplate()
					return
				}
				this.createAnnouncement()
			},
			setSelectedReceiver(receiver) {
				const receiverId = receiver.id;
				const allShortcuts = ['ALL', 'ALL_SPs', 'ALL_IOs'];
				const allSingle = this.receiversFilterFromSelf.map(receiver => receiver.id);
				const all = allShortcuts.concat(allSingle);

				const selectAll = (ids) => {
					ids.forEach(id => this.$set(this.selectedReceivers, id, true));
				};

				const deselectAll = (ids) => {
					ids.forEach(id => this.$delete(this.selectedReceivers, id));
				};

				const checkIfAllIsSelected = () => {
					if (all.filter(allItemId => allItemId !== 'ALL').every(id => this.selectedReceivers[id])) {
						this.$set(this.selectedReceivers, 'ALL', true);
					}
				}

				const handleTypeSelection = (type, shortcut) => {
					if (!this.selectedReceivers[shortcut]) {
						this.$set(this.selectedReceivers, shortcut, true);
						this.receiversFilterFromSelf.forEach(receiver => {
							if (receiver.type === type) {
								this.$set(this.selectedReceivers, receiver.id, true);
							}
						});
						checkIfAllIsSelected()
					} else {
						this.$delete(this.selectedReceivers, shortcut);
						this.$delete(this.selectedReceivers, 'ALL');
						this.receiversFilterFromSelf.forEach(receiver => {
							if (receiver.type === type) {
								this.$delete(this.selectedReceivers, receiver.id);
							}
						});
					}
				};

				if (receiverId === 'ALL') {
					if (!this.selectedReceivers[receiverId]) {
						selectAll(all);
					} else {
						deselectAll(all);
					}
				} else if (receiverId === 'ALL_SPs') {
					handleTypeSelection('SP', 'ALL_SPs');
				} else if (receiverId === 'ALL_IOs') {
					handleTypeSelection('IO', 'ALL_IOs');
				} else {
					if (this.selectedReceivers[receiverId]) {
						this.$delete(this.selectedReceivers, receiverId);
						this.$delete(this.selectedReceivers, 'ALL');
						if (receiver.type === 'SP') {
							this.$delete(this.selectedReceivers, 'ALL_SPs');
						} else if (receiver.type === 'IO') { // IO
							this.$delete(this.selectedReceivers, 'ALL_IOs');
						}
					} else {
						this.$set(this.selectedReceivers, receiverId, true);

						const receiverType = receiver.type;
						const allWithType = this.receiversFilterFromSelf.filter(rece => rece.type === receiverType);
						const allWithTypeSelected = allWithType.every(rece => this.selectedReceivers[rece.id]);

						if (allWithTypeSelected) {
							if (receiverType === 'SP') {
								this.$set(this.selectedReceivers, 'ALL_SPs', true);
							}
							if (receiverType === 'IO') {
								this.$set(this.selectedReceivers, 'ALL_IOs', true);
							}
							checkIfAllIsSelected();
						}
					}
				}
			},
			getIsReceiverSelected(receiverId) {
				return this.selectedReceivers[receiverId]
			},
			resetTemplateSettings() {
				this.theEmailFromCompany = '';
				this.theEmailSubject = '';
				this.theSelectedType = null;
				this.isSendNotifications = false;
				this.theEmailHTML = '';
				this.selectedReceivers = {};
			},
			setMasterTemplate(masterTemplateId) {
				if (masterTemplateId === null) {
					this.activeMasterTemplateId = null;
					this.resetTemplateSettings();
					return;
				}
				const newMasterTemplateId = +masterTemplateId;
				if (this.activeMasterTemplateId !== newMasterTemplateId) {
					this.activeMasterTemplateId = newMasterTemplateId;
				}

				const masterTemp = this.master_templates.find(temp => +temp.template_id === newMasterTemplateId);
				if (!masterTemp) {
					console.error('Template not found', newMasterTemplateId);
					return;
				}

				this.theEmailFromCompany = masterTemp.company_display;
				this.theEmailSubject = masterTemp.subject;
				this.theSelectedType = masterTemp.type;
				this.isSendNotifications = this.convertToBoolean(masterTemp.send_notifications);
				this.theEmailHTML = masterTemp.html;
				this.setPlaceholderLabels(masterTemp)

				if (masterTemp.receivers?.length > 0) {
					this.selectedReceivers = this.fncConvertSemicolonSeparatedStringToObject(masterTemp.receivers);
				}
			},
			convertToBoolean(value) {
				return String(value).toLowerCase() === "true";
			},
			setIsCreateNewMaster(bool) {
				this.$emit('openNewMasterModal')
			},
			setIsCreateModal(bool) {
				if (!bool) {
					this.$emit('setEditMasterTemplate', null)
					this.$emit('close')
					if (this.edit_announcement) {
						this.$emit('done')
					}
				}
			},
			handleFrameMessage(event) {
				if (event.data.type && event.data.type === 'oiFrameHeight') {
					const iFrameHeight = event.data.frameHeight
					this.$refs.o_preview_iframe.height = iFrameHeight + 'px'
				}
				if (event.data.type && event.data.type === 'oiFrameHeightMaster') {
					const iFrameHeight = event.data.frameHeight
					this.$nextTick(_ => {
						const el = this.$refs.o_preview_iframe_master
						if (el) {
							el.height = iFrameHeight + 'px'
						}
					})
				}
			},
			setInitMasterTemplateValues(obj) {
				this.active_area = obj.area
				if (obj.attachments) {
					this.isAttachFiles = true
					this.attachments = obj.attachments
				}
				this.theEmailFromCompany = obj.company_display
				this.theEmailHTML = obj.html
				this.newMasterTitle = obj.name
				this.selectedReceivers = obj.receivers && obj.receivers.length > 0 ? this.fncConvertSemicolonSeparatedStringToObject(obj.receivers) : {}
				this.isSendNotifications = obj.send_notifications
				this.theEmailSubject = obj.subject
				this.setPlaceholderLabels(obj)
				if (obj.type) {
					const selectedTypeIdx = this.filteredTypes.findIndex(oType => {
						return oType.value === obj.type
					})
					this.theSelectedType = selectedTypeIdx > -1 ? this.filteredTypes[selectedTypeIdx].value : null
				}
			},
			onAttachFiles() {
				document.querySelector('.ppUPLOAD #fileupload').click();
				subCatChangeSelect('UPLOAD');
				if (this.attachFilesObserver) {
					this.attachFilesObserver.disconnect();
				}

				this.startObserving();
			},
			handleMutations(mutations) {
				mutations.forEach(mutation => {
					if (mutation.addedNodes && mutation.addedNodes.length > 0) {
						this.isShowAddFiles = true
					} else {
						this.showAddFiles = false
					}
					mutation.addedNodes.forEach(node => {
						if (node.nodeType === 1) { // Checks if the node is an element node

							const clonedNode = node.cloneNode(true); // Deep clone the node

							// Add event listener to all links with a 'deleteurl' attribute within the cloned node
							const links = clonedNode.querySelectorAll('a[deleteurl]');
							links.forEach(link => {
								link.addEventListener('click', this.handleCloneClick);
							});

							// First clone destination
							const elId = `${this.formType}_cloneDestination`;
							const destinationElement = document.getElementById(elId);
							if (destinationElement) {
								destinationElement.appendChild(clonedNode);
							} else {
								console.warn(`Element with ID '${elId}' not found.`);
							}

							// Second clone destination
							const secondClonedNode = node.cloneNode(true); // Clone again for the second destination
							const secondElId = 'second_cloneDestination'; // Change this ID to your second destination's ID
							const secondDestinationElement = document.getElementById(secondElId);
							if (secondDestinationElement) {
								secondDestinationElement.appendChild(secondClonedNode);
							} else {
								console.warn(`Element with ID '${secondElId}' not found.`);
							}
						}
					});
				});
			},
			handleCloneClick(event) {
				const deleteUrl = event.target.getAttribute('deleteurl');
				if (deleteUrl) {
					const originalLink = document.querySelector(`.ppUPLOAD #uploadedPanel a[deleteurl="${deleteUrl}"]`);
					if (originalLink) {
						originalLink.click();
					}
					const wrapperDiv = event.target.closest('div');
					if (wrapperDiv) {
						wrapperDiv.remove();
					}
					const secondContainer = document.getElementById('second_cloneDestination');
					if (secondContainer) {
						const correspondingAnchor = secondContainer.querySelector(`a[deleteurl="${deleteUrl}"]`);
						if (correspondingAnchor) {
							const correspondingWrapperDiv = correspondingAnchor.closest('div');
							if (correspondingWrapperDiv) {
								correspondingWrapperDiv.remove();
							}
						}
					}
					if ($('#announcement_cloneDestination > div').length === 0) {
						this.isShowAddFiles = false
						this.addFilesToCase = ''
						this.isShowAddFilesNotAnswered = false
					}
				}
				event.preventDefault();
			},
			startObserving() {
				const targetNode = document.querySelector('.ppUPLOAD #uploadedPanel');

				if (targetNode) {
					this.attachFilesObserver = new MutationObserver(this.handleMutations);

					this.attachFilesObserver.observe(targetNode, {
						childList: true,
						subtree: true
					});
				}
			},
			resetFilesOnClose() {
				$('.ppUPLOAD #uploadedPanel > div > a').each(function () {
					$(this).click()
				})
			},
			fncRevertFromDisplayToValue(originalArr, display) {
				const idx = originalArr.findIndex(obj => obj.display === display)
				if (idx > -1) {
					return originalArr[idx]['value']
				} else {
					return display
				}
			},
			fncConvertSemicolonSeparatedStringToObject(input) {
				const object = {};
				input.split(';').forEach(prop => {
					if (prop) {
						object[prop] = true
					}
				});
				return object;
			},
			setInitialFormElements() {
				this.activeMasterTemplateId = this.edit_announcement['template_id']
				this.theSelectedType = this.fncRevertFromDisplayToValue(this.filteredTypes, this.edit_announcement['type'])
				this.theSelectedStatus = this.edit_announcement['status']
				//this.theEmailFromCompany = this.edit_announcement['from']
				this.theEmailFromCompany = this.edit_announcement['company_display']
				this.theEmailSubject = this.edit_announcement['subject']
				if (this.edit_announcement['updateSubscription'] && this.edit_announcement['updateSubscription'] != 'false') {
					this.isUpdateSubscription = this.edit_announcement['updateSubscription'] != 'false'
					this.updateSubscriptionInterval = this.edit_announcement['updateSubscriptionInterval']
					this.updateSubscriptionUserId = this.edit_announcement['updateSubscriptionUserId']
				}
				if (this.edit_announcement['serviceWindow'] && this.edit_announcement['serviceWindow'] != 'false') {
					this.isServiceWindow = this.edit_announcement['serviceWindow'] != 'false'
					this.serviceWindowStartFlatPicker = this.edit_announcement['serviceWindowStart']
					this.serviceWindowEndFlatPicker = this.edit_announcement['serviceWindowEnd']
				}
				if (this.edit_announcement['shortDesc'] && this.edit_announcement['shortDesc'].length > 0) {
					this.theEmailTeaser = this.edit_announcement['shortDesc']
				}
				const editReceivers = this.edit_announcement['receivers']
				if (editReceivers) {
					const formattedReceivers = this.fncConvertSemicolonSeparatedStringToObject(editReceivers)
					this.selectedReceivers = formattedReceivers
				}
				const masterTemp = this.master_templates.find(temp => +temp.template_id === +this.activeMasterTemplateId)
				if (masterTemp) {
					this.theEmailHTML = masterTemp['html']
				}
				console.log('this.edit_announcement', this.edit_announcement)
				// Placeholder history
				let newHistPlaceholder = {}
				const currentHist = this.edit_announcement['placeholder_hist']
				try {
					let historyObj = JSON.parse(currentHist)
					newHistPlaceholder = historyObj
				} catch {
				}
				this.placeholderHist = newHistPlaceholder
				// Save current placeholders to history if the current is being changed
				this.setHistoryPlaceholders()
				// Set placeholders 
				for (let i = 1; i < 11; i++) {
					const currentPlaceholder = this.edit_announcement['placeholder_' + i]
					// Set the current placeholders to the edit_placeholders
					if (currentPlaceholder != null) {
						const idx = this.placeholders.findIndex(place => place.num == i)
						if (idx > -1) {
							this.placeholders[idx]['text'] = currentPlaceholder
						}
					}
				}
				this.setPlaceholderLabels(masterTemp)
			},
			setHistoryPlaceholders() {
				const newHistPlaceholder = {}
				for (let i = 1; i < 11; i++) {
					const currentPlaceholder = this.edit_announcement['placeholder_' + i]
					if (currentPlaceholder != null) {
						newHistPlaceholder['placeholder' + i] = { time: this.edit_announcement['createdTime'], text: currentPlaceholder }
					}
				}
				this.versionHistPlaceholder = newHistPlaceholder
			},
			setPlaceholderLabels(masterTemplate) {
				const labelsObj = masterTemplate['thePlaceholderLabels'] ? masterTemplate['thePlaceholderLabels'] : {}
				this.placeholders.forEach((place, key) => {
					const num = key + 1
					place['placeholder'] = 'Tekst til {{{pp_mergecode:placeholder' + num + '}}}'
				})
				Object.keys(labelsObj).forEach((key) => {
					const idx = this.placeholders.findIndex(place => place.id == key)
					this.placeholders[idx]['placeholder'] = labelsObj[key]
					this.thePlaceholderLabels[key] = labelsObj[key]
				})
			},
			initializeQuillEditors() {
				this.$nextTick(() => {
					if (window.Quill) {
						const Block = window.Quill.import('blots/block');
						class DivBlock extends Block { }

						DivBlock.tagName = 'SPAN';

						// true means we overwrite  
						window.Quill.register('blots/block', DivBlock, true);
						const toolbarOptions = [['bold', 'italic', 'underline']];
						const editors = this.$el.querySelectorAll('.o-editor__quill');

						editors.forEach((editor) => {
							if (editor.hasAttribute('data-quill')) {
								return;
							}

							const quill = new Quill(editor, {
								modules: { toolbar: toolbarOptions },
								theme: 'snow',
							});

							editor.setAttribute('data-quill', 'true');

							const idSuffix = editor.id.split('placeholder_')[1];

							this.quillInstances[editor.id] = quill;

							if (Object.keys(this.quillInstances).length === 1) {
								quill.focus();
							}
							const placeholder = this.placeholders.find(p => p.num == idSuffix);
							if (placeholder && placeholder.text) {
								quill.clipboard.dangerouslyPasteHTML(placeholder.text);
							}

							quill.on('text-change', () => {
								const idSuffix = editor.id.split('placeholder_')[1];
								let val = quill.root.innerHTML;
								// Check if the value starts with <p> and ends with </p>, and remove them
								if (val.startsWith('<p>') && val.endsWith('</p>')) {
									val = val.substring(3, val.length - 4); // Remove the first <p> and the last </p>
								}

								const idx = this.placeholders.findIndex(p => p.num == idSuffix);
								if (idx !== -1) {
									this.placeholders[idx].text = val;
								}
								// Not an edit
								if (!this.placeholderHist) {
									return;
								}
								const placeholderId = 'placeholder' + idSuffix;
								if (!this.changedPlaceholders[placeholderId]) {
									this.changedPlaceholders[placeholderId] = true;
									if (this.placeholderHist[placeholderId]) {
										this.placeholderHist[placeholderId].unshift(this.versionHistPlaceholder[placeholderId]);
									} else {
										this.placeholderHist[placeholderId] = [this.versionHistPlaceholder[placeholderId]];
									}
								}
							});

						});
					} else {
						console.error("Quill is not loaded yet!");
					}
				});
			}
		},
		beforeDestroy() {
			window.removeEventListener('message', this.handleFrameMessage);
			if (this.attachFilesObserver) {
				this.attachFilesObserver.disconnect();
			}
			setTimeout(_ => {
				this.resetFilesOnClose()
			})
		},
		beforeMount() {
			this.setInitialServiceWindowDates()
		},
		mounted() {
			this.$nextTick(_ => {
				this.initializeQuillEditors()
			})
			window.addEventListener('message', this.handleFrameMessage);
			if (this.edit_announcement) {
				this.setInitialFormElements()
			}
			if (this.formTypeIsMaster) {
				this.setActiveTab('html')
				if (this.edit_master_template) {
					const idx = this.master_templates.findIndex(masterTemp => +masterTemp.template_id === +this.edit_master_template)
					if (idx > -1) {
						this.setInitMasterTemplateValues(this.master_templates[idx])
					}
				}
				this.$nextTick(_ => {
					if (this.$refs.new_template_title_input) {
						this.$refs.new_template_title_input.focus()
					}
				})
			} else {
				if (!this.edit_announcement) {
					let tempId = 0
					this.sortedMasterTemplates.forEach(masterTemp => {
						if (+masterTemp.template_id > tempId) {
							tempId = +masterTemp.template_id
						}
					})
					if (tempId > 0) {
						this.setMasterTemplate(tempId)
					}
				}
				this.setActiveTab('placeholders')
			}
		}
	})
	/* START 17-12-23 */
	Vue.component('o-multi-select', {
		template: '#o-multi-select-template',
		props: {
			select_title: {
				type: String,
				default: 'Vælg..'
			},
			items: {
				type: Array,
				default: () => []
			},
			selected_items: {
				type: Array,
				default: () => []
			},
			i18n: {
				type: Object,
				default: () => null
			}
		},
		data() {
			return {
				query: '',
				isOpen: false,
			}
		},
		computed: {
			selectTitle() {
				if (this.selected_items.length === 0) {
					return this.select_title
				}
				if (this.selected_items.length === 1) {
					const selectedItem = this.selected_items[0]
					const labelIdx = this.items.findIndex(tagItem => tagItem['label'] && tagItem['value'] == this.selected_items[0])
					if (labelIdx > -1) {
						return this.items[labelIdx]['label']
					}
					if (this.i18n) {
						return this.i18n[selectedItem] ? this.i18n[selectedItem] : selectedItem
					}
					return selectedItem
				}
				if (this.selected_items.length > 1) {
					return this.selected_items.length + ' valgt'
				}
			},
			itemsWithProps() {
				const combinedItems = [...this.items];

				this.selected_items.forEach(selectedItem => {
					if (!combinedItems.some(item => item.value === selectedItem)) {
						combinedItems.push({ value: selectedItem });
					}
				});
				return combinedItems.map(item => {
					const isSelected = this.selected_items.includes(item.value);
					return {
						...item,
						v_selected: isSelected
					};
				});
			},
			itemsSorted() {
				return this.itemsWithProps.slice().sort((a, b) => {
					// Prioritize items with value 'v_no_selected'
					if (a.value === 'v_no_selected') return -1;
					if (b.value === 'v_no_selected') return 1;

					// Prioritize items with 'v_sort' property next
					const aHasVSort = 'v_sort' in a;
					const bHasVSort = 'v_sort' in b;

					if (aHasVSort && !bHasVSort) return -1;
					if (!aHasVSort && bHasVSort) return 1;

					// For items with 'v_sort', sort them alphabetically
					if (aHasVSort && bHasVSort) {
						return a.value.localeCompare(b.value);
					}

					// Standard alphabetical sorting for other cases
					return a.value.localeCompare(b.value);
				});
			},
			filteredItems() {
				const lowerCaseQuery = this.query.toLowerCase();

				return this.itemsSorted.filter(item => {
					let itemTitle = item.label ? item.label.toLowerCase() : item.value.toLowerCase()

					// Check if a localized version of the item title exists
					if (this.i18n && this.i18n[item.value]) {
						itemTitle = this.i18n[item.value].toLowerCase()
					}

					return itemTitle.includes(lowerCaseQuery)
				})
			}
		},
		methods: {
			setIsOpen(bool) {
				this.isOpen = bool
				if (bool) {
					this.$nextTick(_ => {
						this.$refs.query_input.focus()
					})
				}
				if (!bool) {
					this.query = ''
				}
			},
			toggleItem(item) {
				this.$emit('toggle_item', item)
			},
			onMultiSelectBGClick() {
				this.setIsOpen(false)
				this.$emit('close')
			},
			clearQuery() {
				this.query = ''
				this.$refs.query_input.focus()
			},
		}
	})

	Vue.component('tags-selector', {
		template: '#tags-selector-template',
		props: {
			is_loading_tag_button: {
				type: Boolean,
				default: false
			},
			tags: {
				type: Array,
				default: () => []
			},
			groups: {
				type: Array,
				default: () => []
			},
			active_case: {
				type: Object,
				default: null
			},
			active_tag_type: {
				type: String
			}
		},
		data() {
			return {
				theTagsSelectorView: 1,
				highlightedIndex: -1,
				tagsSearch: '',
				tagColors: [
					"#F87171",
					"#FB923C",
					"#FBBF24",
					"#4ADE80",
					"#34D399",
					"#2DD4BF",
					"#22D3EE",
					"#38BDF8",
					"#60A5FA",
					"#A78BFA",
					"#C084FC",
					"#F472B6",
					"#FB7185",
					"#A8A29E",
					"#A1A1AA"
				],
				tagFormName: '',
				tagFormColor: '#F87171',
				theEditingExisting: null,
				isInputError: false,
				isEdited: false,
				selectedTags: [],
				newTags: [],
				isForgotToSave: false
			};
		},
		computed: {
			oldAndNewTags() {
				if (this.active_tag_type === 'tag') {
					return this.tags.concat(this.newTags)
				} else {
					return this.groups.concat(this.newTags)
				}
			},
			tagsWithProps() {
				return this.oldAndNewTags.filter(tag => tag.value !== 'v_no_selected').map(tag => {
					// Check if the current tag exists in this.selectedTags
					const isSelected = this.selectedTags.findIndex(selectedTag => selectedTag.value === tag.value) > -1
					// Return a new object for the tag with the v_selected property
					return {
						...tag,
						v_selected: isSelected
					};
				});
			},
			tagsWithPropsSorted() {
				return this.tagsWithProps.slice().sort((a, b) => {
					// Prioritize items with value 'v_no_selected'
					if (a.value === 'v_no_selected') return -1;
					if (b.value === 'v_no_selected') return 1;

					// Prioritize items with 'v_sort' property next
					const aHasVSort = 'v_sort' in a;
					const bHasVSort = 'v_sort' in b;

					if (aHasVSort && !bHasVSort) return -1;
					if (!aHasVSort && bHasVSort) return 1;

					// For items with 'v_sort', sort them alphabetically
					if (aHasVSort && bHasVSort) {
						return a.value.localeCompare(b.value);
					}

					// Standard alphabetical sorting for other cases
					return a.value.localeCompare(b.value);
				});
			},
			filteredTags() {
				return this.tagsWithPropsSorted.filter(tag => tag.value.toLowerCase().includes(this.tagsSearch.toLowerCase()));
			}
		},
		methods: {
			createAndAddNewTag() {
				// Validation
				if (this.tagFormName.length < 1) {
					const el = document.querySelector('#create_new_tag_input')
					el.focus()
					el.classList.remove('animate-shake')
					setTimeout(_ => {
						el.classList.add('animate-shake')
					}, 100)
					return
				}
				const idxOfCurrent = this.oldAndNewTags.findIndex(tag => tag.value === this.tagFormName)
				if (idxOfCurrent > -1) {
					this.isInputError = true
					return
				}
				const newTagObj = {
					value: this.tagFormName,
					color: this.tagFormColor,
				}
				this.newTags.push(newTagObj)
				this.selectedTags.push(newTagObj)
				this.tagFormName = ''
				this.tagsSearch = ''
				this.tagFormColor = this.tagColors[0]
				this.setTheTagsSelectorView(1)
				this.isEdited = true
			},
			onTagsBGClick() {
				if (this.is_loading_tag_button) {
					return
				}
				if (this.isEdited) {
					this.isForgotToSave = true
				} else {
					this.$emit('close')
				}
			},
			closeWithoutSaving() {
				if (this.is_loading_tag_button) {
					return
				}
				this.$emit('close')
			},
			onCancelClick() {
				this.$emit('close')
			},
			setTheTagsSelectorView(num) {
				this.theTagsSelectorView = num
				this.$nextTick(_ => {
					if (num === 1) {
						document.querySelector('#tag_selector_search_input').focus()
					} else {
						if (this.tagsSearch.length > 0) {
							this.tagFormName = JSON.parse(JSON.stringify(this.tagsSearch))
						}
						this.$refs.create_new_tag_input.focus()
					}
				})
			},
			setTheEditTag(tag) {
				this.tagFormName = tag.value
				this.tagFormColor = tag.color ? tag.color : this.tagColors[0]
				this.theEditingExisting = tag
				this.setTheTagsSelectorView(2)
			},
			removeTag(tag) {
				this.isEdited = true
				const idx = this.selectedTags.findIndex(selectedTag => selectedTag.value === tag.value)
				this.selectedTags.splice(idx, 1)
			},
			removeAllTags() {
				this.selectedTags = []
				this.isEdited = true
			},
			onSelectTag(tag) {
				if (tag.v_selected) {
					return
				} else {
					this.isEdited = true
					this.selectedTags.push(tag)
				}
			},
			saveTags() {
				this.$emit('save_tags', this.selectedTags)
			},
			setCreateNewTag() {
				this.resetForm()
				this.setTheTagsSelectorView(2)
			},
			resetForm() {
				this.tagFormName = ''
				this.tagFormColor = this.tagColors[0]
				this.theEditingExisting = null
			}
		},
		mounted() {
			if (this.active_tag_type === 'tag') {
				this.selectedTags = JSON.parse(JSON.stringify(this.active_case.v_tags))
			} else {
				this.selectedTags = JSON.parse(JSON.stringify(this.active_case.v_groups))
			}
		}
	})
	/* END 17-12-23 */
	new Vue({
		el: "#o-app",
		data: {
			isCreateAnnouncementModal: false,
			announcements: [],
			isShowNewsCases: true,
			isShowNews: true,
			isShowOperationStatusErrorReports: true,
			isShowNewOperationStatus: true,
			toast: {
				message: '',
				visible: false
			},
			isCreateGhostUser: false,
			isLoadingGhostUserList: false,
			theGhostUserList: [],
			theGhostUserSelectedPartner: null,
			theGhostUserSelectedPartnerUser: null,
			isGhostUserCreating: false,
			/* START 17-12-23 */
			PBIReportsData: [],
			isLoadingTheOpenAnalyticsIframe: false,
			theOpenAnalyticsIframeUrl: 'https://opn-iframes-dev.azurewebsites.net/',
			statusI18N: {
				New_msg: 'Ny besked',
				New: 'Ny',
				Åben: 'Åben',
				Pending: 'Åben',
				On_Hold: 'Opfølgning',
				Follow_up: 'Opfølgning udløbet',
				Closed: 'Afsluttet'
			},
			theActiveFilterCategories: [],
			theActiveFilterStatus: [],
			thePredefinedGroups: [],
			theActiveFilterTags: [],
			theActiveFilterGroups: [],
			theActiveLoggedInCompany: null,
			isLoadingTagButton: false,
			theActiveCaseForTag: null,
			theShowTagDropdown: null, /* END 17-12-23 */
			isVueModalOverlay: !1,
			items: [],
			isOpenDocsLoading: !0,
			isClosedDocsLoading: !0,
			isNewUserLoading: !1,
			isNewAnnouncementLoading: !1,
			isUpdatedAnnouncementLoading: !1,
			searchQuery: "",
			debounce: null,
			debounce_user_init: null,
			theActiveFilter: "active",
			activeCategory: "my_cases",
			activeType: null,
			isVueDropdown: !1,
			theUnreadSelected: "Alle",
			theActiveItem: null,
			theUser: null,
			theUserType: "",
			observeAllUsersDiv: null,
			users: [],
			usersIsLoading_1_75: !0,
			usersIsLoading_76_150: !0,
			usersIsLoading_151_225: !0,
			usersIsLoading_226_300: !0,
			usersIsLoading_301_375: !0,
			usersIsLoading_376_450: !0,
			usersIsLoading_451_525: !0,
			theToggleRolesAcc: [],
			theActiveUser: null,
			isEditUser: !1,
			isEditUserRoles: !1,
			isProfileClick: !1,
			userform: {
				name: "",
				display_name_: "",
				email: "",
				sms_no: "",
				new_password: "",
				new_password_confirmed: ""
			},
			formErrors: {},
			isSendingEmail: !1,
			isViewRoles: !1,
			theOSelect: null,
			oSelectQuery: "",
			theActiveRoleForFilter: "399",
			toggle_group_ids: [],
			observeLatestDocsDiv: null,
			cases: [],
			casesIsLoading: !0,
			activeCasesFilters: [],
			theActiveCaseCategory: "Alle kategorier",
			casesQuery: "",
			infiniteScrollNumber: 50,
			isClosedCasesLoading: !0,
			startLength: 1,
			endLength: 500,
			addLength: 500,
			open_startLength: 1,
			open_endLength: 500,
			open_addLength: 500,
			observeClosedCases: null,
			observeOpenCasesV2: null,
			observeLatestCasesDiv: null,
			isNewCaseLoading: !1,
			isCaseUpdating: !1,
			theCaseUpdatingId: null,
			isSortDropdown: !1,
			theSortSettingCases: {
				title: "Oprettelse (Nyeste f\xf8rste)",
				value: "CREATED_ASC"
			},
			theSortSettingDocs: {
				title: "Aktiv (Nyeste f\xf8rste)",
				value: "ACTIVE_DATE_ASC"
			},
			isSearchingOldCases: !1,
			isSearchingPartnerCases: !1,
			updateCasesTimer: null,
			updateDocsTimer: null,
			theOrignalActiveCase: null,
			theActiveCaseUpdatedParams: {},
			isEncodedHappenedBeforeUser: !1,
			onpProductList: [],
			isLoadingOnpProductList: !1,
			theActiveOnpProductListFilter: "Fra alle",
			isCreateOnpModal: !1,
			onpForm: [{
				id: "REC_ID",
				hide: true,
				label: "REC_ID",
				value: "",
				validated: !0,
				formErrorDesc: "Skal udfyldes"
			}, {
				id: "TO_COMPANY",
				label: "Din virksomhed",
				hide: true,
				value: $(".FROM_COMPANY > input").val(),
				validated: !0,
				formErrorDesc: "Skal udfyldes"
			}, {
				id: "FROM_COMPANY",
				label: "Partner",
				value: "",
				validated: !0,
				formErrorDesc: "Skal udfyldes",
				isDropdown: !0,
				options: []
			}, {
				id: "TYPE",
				label: "Type",
				hide: true,
				value: "",
				validated: !0,
				formErrorDesc: "Skal udf{yldes",
				isDropdown: !0,
				optionsWithValues: true,
				options: []
			}, {
				id: "TRANSACTION_CODE",
				hide: true,
				label: "Teknisk Produktnavn",
				value: "",
				validated: !0,
				formErrorDesc: "Skal udfyldes",
				isDropdown: !0,
				options: []
			}, {
				id: "LABEL",
				hide: true,
				label: "Produktnavn",
				value: "",
				validated: !0,
				formErrorDesc: "Skal udfyldes"
			}, {
				id: "TEXT_DESC",
				hide: true,
				label: "Beskrivelse",
				value: "",
				validated: !0,
				isTextArea: !0
			}, {
				id: "PRICE",
				hide: true,
				label: "Pris pr. enhed (inkl. moms)",
				value: "",
				validated: !0
			}, {
				id: "UNIT_LABEL",
				hide: true,
				label: "Enhed (stk., meter, etc... fest)",
				value: "",
				validated: !0,
				disabled: true
			}, {
				id: "UNIT_DEFAULT_VALUE",
				hide: true,
				label: "Pr\xe6udfyldt v\xe6rdi",
				value: "",
				validated: !0
			}
			],
			onpFormData: [],
			isUpdatingOnpProductList: !1,
			infiniteScrollNumberONP: 50,
			isLoadingOnpPendingOrders: !0,
			onpPendingOrders: [],
			ssid: '',
			isSSIDLoading: !1,
			isSSIDValid: !0,
			OnpSSIDDetails: [],
			isNewOrderModal: !1,
			orderCustomerEmail: "",
			isCustomerEmailInputEmpty: !1,
			isSubmitOrderLoading: !1,
			isOrderCustomerEmailValid: !0,
			theActivePrevOrder: null,
			isCancelOrderConfirmation: !1,
			isVueModalOverlayExtra: !1,
			isDeletingOrder: !1,
			theActiveDescExpanded: null,
			theReadMoreOnp: null,
			infiniteScrollNumberONPOrders: 50,
			PBIReportData: [],
			theInvoiceBIExplainer: "",
			theReportBIExplainer: "",
			isLoadingBIReport: !1,
			theActiveOrderType: '001',
			theNewOrderCreatedDate: new Date().toISOString().substring(0, 10),
			theNewOrderSkaderItems: [],
			isEndCustomerEmailConfigModal: false,
			isUpdatingEndCustomerEmailConfigForm: false,
			theEndCustomerEmailConfigForm: [
				{
					id: 'firmanavn',
					label: 'Firmanavn',
					type: 'text',
					value: '',
					validated: true
				},
				{
					id: 'logo',
					label: 'Logo (url)',
					placeholder: 'Eks. https://opennet.dk/assets/img/logo-clean.png',
					type: 'text',
					value: '',
					validated: true
				},
				{
					id: 'emne_til_email',
					label: 'Emnefelt til email',
					type: 'text',
					value: '',
					validated: true,
					configType: 'email'
				},
				{
					id: 'tekst_til_email',
					label: 'Brødtekst til email (Før link)',
					type: 'textarea',
					value: '',
					validated: true,
					configType: 'email'
				},
				{
					id: 'link_i_email',
					label: 'Tekst på knap (link) ',
					type: 'text',
					value: '',
					validated: true,
					configType: 'email'
				},
				{
					id: 'afslutning_af_email',
					label: 'Afslutning af email (Efter link) ',
					type: 'textarea',
					value: '',
					validated: true,
					configType: 'email'
				},

				{
					id: 'title_til_hjemmeside',
					label: 'Titel på hjemmeside',
					type: 'textarea',
					value: '',
					validated: true,
					configType: 'web'
				},
				{
					id: 'tekst_til_hjemmeside',
					label: 'Brødtekst på hjemmeside',
					type: 'textarea',
					value: '',
					validated: true,
					configType: 'web'
				},
				{
					id: 'afslutning_af_hjemmeside',
					label: 'Afslutning af hjemmeside',
					type: 'textarea',
					value: '',
					validated: true,
					configType: 'web'
				},
				{
					id: 'css',
					label: 'Ekstern CSS (url)',
					placeholder: 'Eks. https://opennet.dk/assets/css/main.css',
					type: 'text',
					value: '',
					validated: true,
					configType: 'web'
				}
			],
			standardOnpItems: [
				{ value: '001', title: 'Installationsydelse' },
				{ value: '002', title: 'Skader / Reparation' },
				{ value: '003', title: 'Uberettiget fejlretning' }
			],
			isLoadingEndCustomerEmailConfigFormData: false,
			theEndCustomerEmailConfigFormActiveType: 'web',
			theFilteredSelectedTags: [],
			errorIncidentFilters: ['Change Request'],
			newsCasesFilters: ['Igangværende ordre']
		},
		computed: {
			isViewOperationStatus() {
				return this.activeCategory == 'OperationsStatus'
			},
			isViewNews() {
				return this.activeCategory == 'News'
			},
			isViewNewsOrOperationStatus() {
				return this.activeCategory == 'OperationsStatus' || this.activeCategory == 'News'
			},
			theGhostUserListPartners() {
				return this.theGhostUserList.map(company => company.company)
			},
			theGhostUserSelectedPartnerUsers() {
				const company = this.theGhostUserList.find(c => c.company === this.theGhostUserSelectedPartner);
				return company ? company.users : [];
			},
			/* START 17-12-23 */
			isAnyFiltersActive() {
				return this.theActiveFilterTags.length > 0 || this.theActiveFilterGroups.length > 0 || this.theActiveFilterStatus.length > 0 || this.activeType || (this.theActiveFilterCategories.length > 0 && !this.isShowOperationStatusErrorReports) || (this.theActiveFilterCategories.length > 0 && !this.isShowNewsCases)
			},
			isUserOpennetOrSP() {
				const arrOfActivatedCompanies = ['SP Prod Company', 'OpenNet']
				return arrOfActivatedCompanies.indexOf(this.theActiveLoggedInCompany) > -1
			},
			isNewDesignActive() {
				const arrOfActivatedCompanies = ['SP Prod Company', 'OpenNet', 'SP Dev Company', 'IO Dev Company']
				return arrOfActivatedCompanies.indexOf(this.theActiveLoggedInCompany) > -1
			},
			allCaseCategories() {
				const uniqueArr = [{ value: 'v_no_selected', label: 'Uden kategori', v_sort: true }]
				this.casesFiltered2.forEach(caseItem => {
					const dbValue = caseItem['filter_category']
					if (dbValue) {
						const idx = uniqueArr.findIndex(allTag => allTag.value === dbValue)
						if (idx < 0) {
							const obj = { value: dbValue }
							uniqueArr.push(obj)
						}
					}
				})
				return uniqueArr
			},
			allCaseStatus() {
				const uniqueArr = [{ value: 'v_no_selected', label: 'Uden status', v_sort: true }]
				this.casesFiltered2.forEach(caseItem => {
					const dbValue = caseItem['v_status']
					if (dbValue) {
						const idx = uniqueArr.findIndex(allTag => allTag.value === dbValue)
						if (idx < 0) {
							const obj = { value: dbValue, label: this.statusI18N[dbValue] }
							uniqueArr.push(obj)
						}
					}
				})
				return uniqueArr
			},
			allCaseGroups() {
				const uniqueTags = [{ value: 'v_no_selected', label: 'Uden gruppe', v_sort: true }]
				this.casesFiltered2.forEach(caseItem => {
					if (caseItem['v_groups']) {
						caseItem['v_groups'].forEach(tag => {
							const idx = uniqueTags.findIndex(allTag => allTag.value === tag.value)
							const idxInPredefined = this.thePredefinedGroups.findIndex(predefinedTag => predefinedTag.value === tag.value)
							if (idx < 0 && idxInPredefined < 0) {
								uniqueTags.push(tag)
							}
						})
					}
				})
				return uniqueTags.concat(this.thePredefinedGroups)
			},
			allCaseTags() {
				const uniqueTags = [{ value: 'v_no_selected', label: 'Uden tags', v_sort: true }]
				this.casesFiltered2.forEach(caseItem => {
					if (caseItem['v_tags']) {
						caseItem['v_tags'].forEach(tag => {
							const idx = uniqueTags.findIndex(allTag => allTag.value === tag.value)
							if (idx < 0) {
								uniqueTags.push(tag)
							}
						})
					}
				})

				return uniqueTags;
			},
			/* END 17-12-23 */
			onpSSIDDetailsGrouped() {
				let obj = {}
				const itemsSorted = this.OnpSSIDDetails.sort((a, b) => a.LABEL !== b.LABEL ? a.LABEL < b.LABEL ? -1 : 1 : 0);
				itemsSorted.forEach(item => {
					if (obj[item.TYPE]) {
						obj[item.TYPE].push(item)
					} else {
						obj[item.TYPE] = [item]
					}
				})
				return obj
			},
			pbiReports() {
				if (!this.PBIReportsData || this.PBIReportsData.length < 1) {
					return [];
				}

				// Filter reports by the active category
				let filteredReports = this.PBIReportsData.filter(report => report.area === this.activeCategory);
				console.log('filteredReports', filteredReports);
				// Find the index of the report with the display name "Vælg"
				let indexOfValg = filteredReports.findIndex(report => report && report.reportDisplayName === "Vælg");
				console.log('indexOfValg', indexOfValg);
				// If there are reports and "Vælg" is not found, add a placeholder to the beginning
				if (filteredReports.length > 0 && indexOfValg < 0) {
					console.log('run_unshift');
					filteredReports.unshift({
						reportDisplayName: "Vælg",
						reportId: "placeholderDropdown"
					});
				}
				console.log('filteredReports', filteredReports)
				return filteredReports;
			},
			theSortSetting() {
				return this.isCases ? this.theSortSettingCases : this.theSortSettingDocs
			},
			allSortSettings() {
				return this.isCases ? [{
					title: "Oprettelse (Nyeste f\xf8rste)",
					value: "CREATED_ASC"
				}, {
					title: "Oprettelse (\xc6ldste f\xf8rste)",
					value: "CREATED_DESC"
				}, {
					title: "SLA (Nyeste f\xf8rste)",
					value: "SLA_ASC"
				}, {
					title: "SLA (\xc6ldste f\xf8rste)",
					value: "SLA_DESC"
				}, {
					title: "Opdateret (Nyeste f\xf8rste)",
					value: "UPDATED_ASC"
				}, {
					title: "Opdateret (\xc6ldste f\xf8rste)",
					value: "UPDATED_DESC"
				}] : [{
					title: "Aktiv (Nyeste f\xf8rste)",
					value: "ACTIVE_DATE_ASC"
				}, {
					title: "Aktiv (\xc6ldste f\xf8rste)",
					value: "ACTIVE_DATE_DESC"
				}, {
					title: "Udl\xf8b (Nyeste f\xf8rste)",
					value: "EXPIRE_DATE_ASC"
				}, {
					title: "Udl\xf8b (\xc6ldste f\xf8rste)",
					value: "EXPIRE_DATE_DESC"
				}]
			},
			casesFiltered() {
				return "my_cases" == this.activeCategory ? this.cases.filter(e => "true" == e.filter_my_cases) : this.cases
			},
			casesOpen() {
				return this.casesFiltered.filter(e => "open" == e.filter_open_closed)
			},
			casesClosed() {
				return this.casesFiltered.filter(e => "closed" == e.filter_open_closed)
			},
			partnerCases() {
				return this.casesFiltered.filter(e => "partnerCases" == e.filter_open_closed)
			},
			isErrorReportsLoading() {
				return this.isClosedCasesLoading || this.casesIsLoading
			},
			errorReports() {
				// Kun return når begge er loaded
				if (this.isErrorReportsLoading) {
					return []
				}
				const allIncidentCases = this.casesOpen.concat(this.casesClosed)
				return allIncidentCases.filter(itemCase => this.errorIncidentFilters.indexOf(itemCase.filter_category) > -1)
			},
			newsCases() {
				// Kun return når begge er loaded
				if (this.isErrorReportsLoading) {
					return []
				}
				const allIncidentCases = this.casesOpen.concat(this.casesClosed)
				return allIncidentCases.filter(itemCase => this.newsCasesFilters.indexOf(itemCase.filter_category) > -1)
			},
			casesFiltered2() {
				if (this.activeCategory == 'OperationsStatus' && this.isShowOperationStatusErrorReports) {
					return this.errorReports
				}
				if (this.activeCategory == 'News' && this.isShowNewsCases) {
					return this.newsCases
				}
				if (this.theActiveFilter === "active") {
					return this.casesOpen
				} else {
					return this.casesClosed
				}
			},
			caseFilteredWithGroups() {
				if (this.theActiveFilterGroups.length < 1) {
					return this.casesFiltered2;
				} else {
					return this.casesFiltered2.filter(itemCase => {
						const hasNoSelectedGroup = this.theActiveFilterGroups.includes('v_no_selected');
						if (hasNoSelectedGroup && (!itemCase.v_groups || itemCase.v_groups.length === 0)) {
							return true;
						}
						return itemCase.v_groups && itemCase.v_groups.some(vGroup =>
							this.theActiveFilterGroups.includes(vGroup.value));
					})
				}
			},
			caseFilteredWithStatus() {
				if (this.theActiveFilterStatus.length < 1) {
					return this.caseFilteredWithGroups;
				} else {
					return this.caseFilteredWithGroups.filter(itemCase => {
						// Check if 'v_no_selected' is one of the active filter statuses
						const hasNoSelectedStatus = this.theActiveFilterStatus.includes('v_no_selected');

						// If 'v_no_selected' is present and the item has an empty status, include it in the filter
						if (hasNoSelectedStatus && (!itemCase.v_status || itemCase.v_status === '')) {
							return true;
						}

						// If item has a status, check if it matches any of the active filter statuses
						return this.theActiveFilterStatus.includes(itemCase.v_status);
					})
				}
			},
			caseFilteredWithCategories() {
				if (this.activeCategory == 'OperationsStatus' && this.isShowOperationStatusErrorReports || this.activeCategory == 'News' && this.isShowNewsCases) {
					return this.caseFilteredWithStatus
				}
				if (this.theActiveFilterCategories.length < 1) {
					return this.caseFilteredWithStatus;
				} else {
					return this.caseFilteredWithStatus.filter(itemCase => {
						// Check if 'v_no_selected' is one of the active filter statuses
						const hasNoSelectedStatus = this.theActiveFilterCategories.includes('v_no_selected');

						// If 'v_no_selected' is present and the item has an empty status, include it in the filter
						if (hasNoSelectedStatus && (!itemCase.filter_category || itemCase.filter_category === '')) {
							return true;
						}
						return this.theActiveFilterCategories.includes(itemCase.filter_category);
					})
				}
			},
			caseFilteredWithTags() {
				if (this.theActiveFilterTags.length < 1) {
					return this.caseFilteredWithCategories;
				} else {
					return this.caseFilteredWithCategories.filter(itemCase => {
						const hasNoSelectedTag = this.theActiveFilterTags.includes('v_no_selected');
						if (hasNoSelectedTag && (!itemCase.v_tags || itemCase.v_tags.length === 0)) {
							return true;
						}
						return itemCase.v_tags && itemCase.v_tags.some(vTag =>
							this.theActiveFilterTags.includes(vTag.value));
					});
				}
			},
			casesFiltered3() {
				let e = this.activeType;
				return "not_assigned" == e ? this.caseFilteredWithTags.filter(e => e.assign_to.length < 1) : "filter_not_follow_up" == e ? this.caseFilteredWithTags.filter(e => !this.activeType || "true" != e.filter_follow_up) : this.caseFilteredWithTags.filter(t => !this.activeType || "true" == t[e])
			},
			caseFiltered4() {
				// Check if the active case category is not 'Alle kategorier'
				if (this.theActiveCaseCategory !== "Alle kategorier") {
					// If it's a specific category, filter the cases
					return this.casesFiltered3.filter(caseItem =>
						caseItem.filter_category === this.theActiveCaseCategory);
				} else {
					// If the active category is 'Alle kategorier', return all cases
					return this.casesFiltered3;
				}
			},
			casesSorted() {
				switch (this.theSortSettingCases.value) {
					case "CREATED_ASC":
						return this.caseFiltered4.sort((e, t) => this.formatDateForJs(t.created_time) - this.formatDateForJs(e.created_time));
					case "CREATED_DESC":
						return this.caseFiltered4.sort((e, t) => this.formatDateForJs(e.created_time) - this.formatDateForJs(t.created_time));
					case "SLA_ASC":
						return this.caseFiltered4.sort((e, t) => this.formatDateForJs(t.sla_deadline_date, t) - this.formatDateForJs(e.sla_deadline_date, e));
					case "SLA_DESC":
						return this.caseFiltered4.sort((e, t) => this.formatDateForJs(e.sla_deadline_date, e) - this.formatDateForJs(t.sla_deadline_date, t));
					case "UPDATED_ASC":
						return this.caseFiltered4.sort((e, t) => this.formatDateForJs(t.last_updated_time) - this.formatDateForJs(e.last_updated_time));
					case "UPDATED_DESC":
						return this.caseFiltered4.sort((e, t) => this.formatDateForJs(e.last_updated_time) - this.formatDateForJs(t.last_updated_time))
				}
			},
			searchedCases() {
				return this.isCases ? this.searchQuery.length < 1 ? this.casesSorted : this.searchFunc(this.casesSorted) : []
			},
			lengthOfCases() {
				var e = {
					filter_created_by_me: 0,
					filter_assigned_me: 0,
					filter_followed_by_me: 0,
					filter_sla_expired: 0,
					filter_new: 0,
					not_assigned: 0,
					filter_follow_up: 0,
					filter_not_follow_up: 0
				};
				return this.casesFiltered2.forEach(t => {
					"true" == t.filter_created_by_me && e.filter_created_by_me++, "true" == t.filter_assigned_me && e.filter_assigned_me++, "true" == t.filter_followed_by_me && e.filter_followed_by_me++, "true" == t.filter_sla_expired && e.filter_sla_expired++, "true" == t.filter_new && e.filter_new++, t.assign_to.length < 1 && e.not_assigned++, "true" == t.filter_follow_up && e.filter_follow_up++, "false" == t.filter_follow_up && e.filter_not_follow_up++
				}), e
			},
			allCategoriesFromCases() {
				let e = [];
				return ("active" === this.theActiveFilter ? this.itemsActiveFromCategory : this.itemsExpiredFromCategory).forEach((t, s) => {
					if (t.type && t.type.length > 0) {
						let a = e.findIndex(e => e.title === t.type);
						a < 0 ? e.push({
							title: t.type,
							onIds: [t.onid]
						}) : e[a].onIds.push(t.onid)
					}
				}), e
			},
			allCasesCategories() {
				var e = [];
				this.casesFiltered2.forEach(t => {
					let s = unescape(t.filter_category);
					0 > e.findIndex(e => e === s) && e.push(s)
				});
				let t = e.sort((e, t) => e.localeCompare(t));
				return t.unshift("Alle kategorier"), t
			},
			isDocs() {
				return "" !== this.activeCategory && "roles" !== this.activeCategory && "all_cases" !== this.activeCategory && "my_cases" !== this.activeCategory && "end_customer_pricing_config" !== this.activeCategory && "end_customer_orders" !== this.activeCategory
			},
			isCases() {
				return "all_cases" == this.activeCategory || "my_cases" == this.activeCategory || (this.activeCategory == 'OperationsStatus' && this.isShowOperationStatusErrorReports) || (this.activeCategory == 'News' && this.isShowNewsCases)
			},
			allCategories() {
				let e = [];
				return this.items.forEach((t, s) => {
					0 > e.indexOf(t.category) && e.push(t.category)
				}), e
			},
			allTypesFromCategory() {
				let e = [];
				return (items = "active" === this.theActiveFilter ? this.itemsActiveFromCategory : "future" === this.theActiveFilter ? this.itemsFutureFromCategory : this.itemsExpiredFromCategory).forEach((t, s) => {
					if (t.type && t.type.length > 0) {
						let a = e.findIndex(e => e.title === t.type);
						a < 0 ? e.push({
							title: t.type,
							onIds: [t.onid]
						}) : e[a].onIds.push(t.onid)
					}
				}), e
			},
			filteredItemsWithActiveDateAfterToday() {
				return this.items.filter(e => !this.dateIsAfterToday(this.formatDateForJs(e.active_date)))
			},
			itemsSorted() {
				let e = this.filteredItemsWithActiveDateAfterToday;
				switch (this.theSortSettingDocs.value) {
					case "ACTIVE_DATE_ASC":
						return e.sort((e, t) => this.formatDateForJs(t.active_date) - this.formatDateForJs(e.active_date));
					case "ACTIVE_DATE_DESC":
						return e.sort((e, t) => this.formatDateForJs(e.active_date) - this.formatDateForJs(t.active_date));
					case "EXPIRE_DATE_ASC":
						return e.sort((e, t) => this.formatDateForJs(t.expire_date, t) - this.formatDateForJs(e.expire_date, e));
					case "EXPIRE_DATE_DESC":
						return e.sort((e, t) => this.formatDateForJs(e.expire_date, e) - this.formatDateForJs(t.expire_date, t))
				}
			},
			filteredItemsWithCategory() {
				return this.itemsSorted.filter(e => e.category === this.activeCategory)
			},
			itemsActiveFromCategory() {
				let e = new Date;
				return this.filteredItemsWithCategory.filter(t => {
					let s = t.expire_date ? this.formatDateForJs(t.expire_date) : e.setDate(e.getDate() + 1);
					return this.dateIsAfterToday(s)
				})
			},
			itemsExpiredFromCategory() {
				let e = new Date;
				return this.filteredItemsWithCategory.filter(t => {
					let s = t.expire_date ? this.formatDateForJs(t.expire_date) : e.setDate(e.getDate() + 1);
					return !this.dateIsAfterToday(s)
				})
			},
			itemsFutureFromCategory() {
				let e = this.items.filter(e => e.category === this.activeCategory && this.dateIsAfterToday(this.formatDateForJs(e.active_date)));
				switch (this.theSortSettingDocs.value) {
					case "ACTIVE_DATE_ASC":
						return e.sort((e, t) => this.formatDateForJs(t.active_date) - this.formatDateForJs(e.active_date));
					case "ACTIVE_DATE_DESC":
						return e.sort((e, t) => this.formatDateForJs(e.active_date) - this.formatDateForJs(t.active_date));
					case "EXPIRE_DATE_ASC":
						return e.sort((e, t) => this.formatDateForJs(t.expire_date, t) - this.formatDateForJs(e.expire_date, e));
					case "EXPIRE_DATE_DESC":
						return e.sort((e, t) => this.formatDateForJs(e.expire_date, e) - this.formatDateForJs(t.expire_date, t))
				}
			},
			filteredItemsWithType() {
				return (items = "active" === this.theActiveFilter ? this.itemsActiveFromCategory : "future" === this.theActiveFilter ? this.itemsFutureFromCategory : this.itemsExpiredFromCategory).filter(e => !this.activeType || e.type === this.activeType)
			},
			filteredItemsOnUnread() {
				return this.filteredItemsWithType.filter(e => "Alle" === this.theUnreadSelected ? e : "Ul\xe6st" === this.theUnreadSelected ? "Yes" === e.show_unread_icon : "L\xe6st" === this.theUnreadSelected ? "No" === e.show_unread_icon : void 0)
			},
			searchedItems() {
				return this.isDocs ? this.searchFunc(this.filteredItemsOnUnread) : []
			},
			allRoles() {
				return this.users[0] && this.users[0].role_array ? this.users[0].role_array : []
			},
			searchedUsers() {
				return "roles" !== this.activeCategory ? [] : this.searchFunc(this.users)
			},
			isTheActiveUserTheUser() {
				return this.theActiveUser.id == this.theUser.id
			},
			oSelectUsers() {
				return this.users.filter(e => null !== e.name ? e.name.match(RegExp(this.oSelectQuery, "i")) : "")
			},
			usersWithoutActiveRole(e) {
				var e = this.theActiveRoleForFilter;
				return this.oSelectUsers.filter(t => t.role_array.findIndex(t => t.group_id == e && "false" == t.active_role) > -1)
			},
			usersIsLoading() {
				return this.usersIsLoading_1_75 || this.usersIsLoading_76_150 || this.usersIsLoading_151_225 || this.usersIsLoading_226_300 || this.usersIsLoading_301_375 || this.usersIsLoading_376_450 || this.usersIsLoading_451_525
			},
			onpProductListVProps() {
				const valueTitleMap = this.standardOnpItems.reduce((obj, item) => (obj[item.value] = item.title, obj), {})
				return this.onpProductList.map(item => {
					this.$set(item, 'v_type', valueTitleMap[item.TYPE])
					return item
				})
			},
			onpProductListFilters() {
				var e = [];
				return this.onpProductListVProps.forEach(t => {
					0 > e.indexOf(t.FROM_COMPANY) && e.push(t.FROM_COMPANY)
				}), e.sort().unshift("Fra alle"), e
			},
			onpProductListFiltered() {
				return ("Fra alle" != this.theActiveOnpProductListFilter ? this.onpProductList.filter(e => e.FROM_COMPANY === this.theActiveOnpProductListFilter) : this.onpProductList).sort(function (e, t) {
					return e.REC_ID - t.REC_ID
				})
			},
			onpProductListSearched() {
				return this.searchFunc(this.onpProductListFiltered)
			},
			onpPendingOrdersVProps() {
				const valueTitleMap = this.standardOnpItems.reduce((obj, item) => (obj[item.value] = item.title, obj), {})
				return this.onpPendingOrders.map(item => {
					this.$set(item, 'v_type', valueTitleMap[item.TYPE])
					return item
				})
			},
			onpPendingOrdersSorted() {
				return this.onpPendingOrders.sort((e, t) => this.formatDateForJs2TypsOfDates(t.created_time) - this.formatDateForJs2TypsOfDates(e.created_time))
			},
			onpPendingOrdersSearched() {
				return this.searchFunc(this.onpPendingOrdersSorted)
			},
			order() {
				if (this.theActiveOrderType !== '002') {
					return this.OnpSSIDDetails.filter(e => e.v_count > 0)
				}
				if (this.theActiveOrderType === '002') {
					return this.theNewOrderSkaderItems
				}
			},
			orderSum() {
				var e = 0;
				return this.order.forEach(t => {
					e += t.PRICE * t.v_count
				}), e
			},
			dbOrder() {
				var orderStatus = this.theActiveOrderType === '001' ? "PENDING" : "APPROVED"
				return {
					id: "",
					created_time: this.theNewOrderCreatedDate,
					created_by: "",
					order_items: this.order.map(e => ({
						TRANSACTION_CODE: e.TRANSACTION_CODE,
						LABEL: e.LABEL,
						PRICE: e.PRICE,
						QUANTITY: e.v_count,
						UNIT_LABEL: e.UNIT_LABEL,
						SSID: e.ssid
					})),
					order_sum: this.orderSum,
					status: orderStatus,
					can_cancel: !0,
					customer_email: this.orderCustomerEmail,
					ssid: this.ssid
				}
			},
			theEndCustomerEmailConfigFormWithoutFilter() {
				return this.theEndCustomerEmailConfigForm.filter(formItem => !formItem.configType)
			},
			theEndCustomerEmailConfigFormFiltered() {
				return this.theEndCustomerEmailConfigForm.filter(formItem => formItem.configType && formItem.configType === this.theEndCustomerEmailConfigFormActiveType)
			},
			theEndCustomerEmailConfigFormHash() {
				return this.theEndCustomerEmailConfigForm.reduce((obj, item) => (obj[item.id] = item, obj), {})
			}
		},
		watch: {
			theUser(e) {
				this.isEncodedHappenedBeforeUser && this.cases.forEach((e, t) => {
					e.created_by_id && e.created_by_id == this.theUser.id && (Vue.set(e, "filter_created_by_me", "true"), Vue.set(e, "filter_my_cases", "true")), e.assign_to_id && e.assign_to_id == this.theUser.id && (Vue.set(e, "filter_assigned_me", "true"), Vue.set(e, "filter_my_cases", "true")), e.followed_by_list && e.followed_by_list.split(";").indexOf(this.theUser.id) > -1 && (Vue.set(e, "filter_followed_by_me", "true"), Vue.set(e, "filter_my_cases", "true"))
				})
			}
		},
		methods: {
			setIsCreateAnnouncementModal(bool) {
				this.isCreateAnnouncementModal = bool
			},
			onEmitAnnouncements(payload) {
				this.announcements = payload
			},
			setIsShowOperationStatusErrorReports(bool) {
				if (bool) {
					requestTypeFilter = this.errorIncidentFilters
					this.isShowOperationStatusErrorReports = true
				} else {
					requestTypeFilter = null
					this.isShowOperationStatusErrorReports = false
				}
			},
			setIsShowNewsCases(bool) {
				if (bool) {
					requestTypeFilter = this.newsCasesFilters
					this.isShowNewsCases = true
				} else {
					requestTypeFilter = null
					this.isShowNewsCases = false
				}
			},
			showToast(message) {
				this.toast.message = message;
				this.toast.visible = true;
				setTimeout(() => {
					this.toast.visible = false;
				}, 3000); // Hide after 3 seconds
			},
			createGhostUser() {
				this.isGhostUserCreating = true
				$('.UM_EVENT_TYPE > input').val('GHOST')
				$('.UM_USER_ID > input').val(this.theGhostUserSelectedPartnerUser)
				$('.BTN_UserManagement > a').click()
				setTimeout(_ => {
					this.closeVueModalOverlay()
					this.showToast('“ghost profile” er oprettet og detaljer kommer pr email')
				}, 1000)
			},
			onTheGhostUserSelectedPartner(val) {
				this.theGhostUserSelectedPartner = val
				this.theGhostUserSelectedPartnerUser = null
			},
			onTheGhostUserSelectedPartnerUser(val) {
				this.theGhostUserSelectedPartnerUser = val
			},
			setIsCreateGhostUser() {
				if (!this.isCreateGhostUser) {
					this.isCreateGhostUser = true
					this.isLoadingGhostUserList = true
					this.observeChanges('.getUserFullList_Output > div', data => {
						this.theGhostUserList = data.length > 0 ? JSON.parse(data) : []
						this.isLoadingGhostUserList = false
						$('.getUserFullList_Output > div').html('')
					})
					$('.getUserFullList_BTN > a').click()
				} else {
					this.isCreateGhostUser = false
				}
			},
			/* START 17-12-23 */
			getAllLocalStorageFilter() {
				if (!this.isNewDesignActive) {
					return
				}
				this.theActiveFilterTags = []
				this.theActiveFilterGroups = []
				this.theActiveFilterStatus = []
				this.theActiveFilterCategories = []
				this.activeType = null
				this.getLocalStorageFilter('theActiveFilterTags')
				this.getLocalStorageFilter('theActiveFilterGroups')
				this.getLocalStorageFilter('theActiveFilterStatus')
				this.getLocalStorageFilter('theActiveFilterCategories')
				this.getLocalStorageFilter('activeType')
			},
			removeAllFilters() {
				this.theActiveFilterTags = []
				this.setLocalStorageFilter('theActiveFilterTags', this.theActiveFilterTags)
				this.theActiveFilterGroups = []
				this.setLocalStorageFilter('theActiveFilterGroups', this.theActiveFilterGroups)
				this.theActiveFilterStatus = []
				this.setLocalStorageFilter('theActiveFilterStatus', this.theActiveFilterStatus)
				this.theActiveFilterCategories = []
				this.setLocalStorageFilter('theActiveFilterCategories', this.theActiveFilterCategories)
				this.activeType = null;
				this.setLocalStorageFilter('activeType', null)
				this.infiniteScrollNumber = 50;
				this.clearSearchQuery();
			},
			setLocalStorageFilter(filterType, filterArr) {
				const localTitle = this.activeCategory + '_' + this.theActiveFilter + '_' + filterType
				if (!filterArr || filterArr.length === 0) {
					localStorage.removeItem(localTitle)
				} else {
					localStorage.setItem(localTitle, JSON.stringify(filterArr))
				}
			},
			getLocalStorageFilter(filterType, filterArr) {
				const localTitle = this.activeCategory + '_' + this.theActiveFilter + '_' + filterType
				if (localStorage.getItem(localTitle)) {
					this[filterType] = JSON.parse(localStorage.getItem(localTitle));
				}
			},
			toggleFilterCategory(item) {
				const idx = this.theActiveFilterCategories.indexOf(item.value)
				if (idx < 0) {
					this.theActiveFilterCategories.push(item.value)
				} else {
					this.theActiveFilterCategories.splice(idx, 1)
				}
				this.setLocalStorageFilter('theActiveFilterCategories', this.theActiveFilterCategories)
			},
			toggleFilterStatus(item) {
				const idx = this.theActiveFilterStatus.indexOf(item.value)
				if (idx < 0) {
					this.theActiveFilterStatus.push(item.value)
				} else {
					this.theActiveFilterStatus.splice(idx, 1)
				}
				this.setLocalStorageFilter('theActiveFilterStatus', this.theActiveFilterStatus)
			},
			toggleFilterTag(item) {
				const idx = this.theActiveFilterTags.indexOf(item.value)
				if (idx < 0) {
					this.theActiveFilterTags.push(item.value)
				} else {
					this.theActiveFilterTags.splice(idx, 1)
				}
				this.setLocalStorageFilter('theActiveFilterTags', this.theActiveFilterTags)
			},
			toggleFilterGroup(item) {
				const idx = this.theActiveFilterGroups.indexOf(item.value)
				if (idx < 0) {
					this.theActiveFilterGroups.push(item.value)
				} else {
					this.theActiveFilterGroups.splice(idx, 1)
				}
				this.setLocalStorageFilter('theActiveFilterGroups', this.theActiveFilterGroups)
			},
			updateItemTags(tagsArr) {
				const caseOnId = this.theActiveCaseForTag.onid
				const caseIdx = this.cases.findIndex(caseItem => caseItem.onid === caseOnId)
				const tagsArrDb = tagsArr.map(tag => {
					return {
						value: tag.value,
						color: tag.color
					}
				})
				$('.updTagOrGroup_Input > input').val(JSON.stringify(tagsArrDb));
				$('.updTagOrGroup_Input_type > input').val(this.theShowTagDropdown)
				$('.updTagOrGroup_Input_caseid > input').val(caseOnId)
				this.isLoadingTagButton = true
				this.observeChanges('.updTagOrGroup_Output > div', data => {
					this.isLoadingTagButton = false
					if (this.theShowTagDropdown === 'tag') {
						this.cases[caseIdx].v_tags = tagsArr
					} else {
						this.cases[caseIdx].v_groups = tagsArr
					}
					// If modal is open then we need to update the jquery part tags and timeline
					if ($('#js-case-element__inserted').length > 0) {
						// Update tags/groups
						const tagType = `data-tag-type="${this.theShowTagDropdown}"`;
						var container = $('#js-case-element__inserted .o-cases__case_element__header__row__tags__container[' + tagType + ']');
						var self = this
						updateTagsHTML()

						function updateTagsHTML() {
							container.empty();
							let htmlArr = [];
							tagsArr.forEach(tag => {
								var tagDiv = `<div class="item-tag" style="background-color: ${tag.color};">${tag.value}</div>`;
								htmlArr.push(tagDiv);
							});
							const typei18n = self.theShowTagDropdown === 'group' ? 'gruppe' : 'tag'
							if (htmlArr.length === 0) {
								container.html('<div class="itemcase-tags__add">Tilføj ' + typei18n + '</div>')
							} else {
								container.html(htmlArr.join(''));
							}
						}
						// Update timeline
						const newHtml = $('.updTagOrGroup_Output > div').html()
						var timelineContent = '<div class="timeline_body">' +
							$(".updTagOrGroup_Output > div > .ETRAY_CASE_TIMELINE").text() +
							"</div>";

						// Update the ETRAY_CASE_TIMELINE with the new content
						$(".ETRAY_CASE_TIMELINE_PARRENT > div > .ETRAY_CASE_TIMELINE").html(timelineContent);

						// Set the new timeline content to the modal
						$(".js-o-modal__case__timeline").html($(".ETRAY_CASE_TIMELINE_PARRENT > div").html());


					}
					this.setTheActiveTagDropdown(null)
				})
				$('.updTagOrGroup_BTN > a').click()
			},
			observeChanges(selector, callback) {
				const el = $(selector)
				if (!el || el.length === 0) {
					//console.warn(`No element found with selector ${selector}`);
					return;
				}
				el.html('loading')
				let cInterval = setInterval(_ => {
					const val = el.html()
					if (val !== 'loading') {
						clearInterval(cInterval)
						callback(val);
					} else {
						// console.log('observer::empty', { selector }, el.html())
					}
				}, 1000)
			},
			createPopper(parent) {
				const child = document.getElementById('popperTagsDropdown')
				Popper.createPopper(
					parent,
					child,
					{
						// Popper options
						placement: 'bottom-start',
						modifiers: [
							{
								name: 'offset',
								options: {
									offset: [0, 10], // x-axis: 0, y-axis: -10
								},
							},
						],
					}
				);
				this.$nextTick(_ => {
					document.getElementById('tag_selector_search_input').focus()
				})
			},
			setTheActiveTagDropdown(tagType, itemCase, evt) {
				if (!tagType) {
					this.theShowTagDropdown = null
					this.theActiveCaseForTag = null
					return
				}
				console.log('event::setTheActiveTagDropdown', { itemCase })
				this.theActiveCaseForTag = itemCase
				this.theShowTagDropdown = tagType
				this.$nextTick(_ => {
					this.createPopper(evt.target)
				})
			},
			/* END 17-12-23 */
			setTheEndCustomerEmailConfigFormActiveType(type) {
				//console.log(this.theEndCustomerEmailConfigFormActiveType)
				this.theEndCustomerEmailConfigFormActiveType = type
			},
			setTheActiveOrderType(typeCode) {
				this.theActiveOrderType = typeCode
				if (typeCode !== '001') {
					this.setNewOrderSkaderItems()
					this.$nextTick(_ => {
						const el = document.querySelector('.o-cart__items__item--form > input[type="text"]')
						if (el) {
							el.focus()
						}
					})
				}
			},
			setTypeOptionsInOnpForm(items, standardFormProp, formProp) {
				let values = [];
				const standardItems = [
					{ value: '001', title: 'Installationsydelse' },
					{ value: '002', title: 'Skader / Reparation' },
					{ value: '003', title: 'Uberettiget fejlretning' }
				]
				items.forEach(product => {
					let value = product[standardFormProp];
					if (values.indexOf(value) < 0) {
						values.push(value);
					}
				});
				const index = this.onpForm.findIndex(item => item.id === formProp);
				let valuesWithTitle = []
				values.sort().forEach(val => {
					const idxOfStandard = standardItems.findIndex(standardItem => standardItem['value'] === val)
					if (idxOfStandard > -1) {
						valuesWithTitle.push(standardItems[idxOfStandard])
					} else {
						valuesWithTitle.push({ value: val, title: val })
					}
				})
				this.onpForm[index].options = valuesWithTitle
				if (valuesWithTitle.length === 1) {
					this.onpForm[index].value = valuesWithTitle[0].value
					this.setFormItemValidated(this.onpForm[index])
				}
				this.onpForm[index].hide = false
			},
			setOptionsInOnpForm(items, standardFormProp, formProp) {
				let values = [];
				items.forEach(product => {
					let value = product[standardFormProp];
					if (values.indexOf(value) < 0) {
						values.push(value);
					}
				});
				const index = this.onpForm.findIndex(item => item.id === formProp);
				this.onpForm[index].options = values.sort()
				if (values.length === 1) {
					this.onpForm[index].value = values[0]
					this.setFormItemValidated(this.onpForm[index])
				}
				this.onpForm[index].hide = false
			},
			setFormItemValidated(formItem) {
				const val = formItem.value
				formItem.validated = true
				if (formItem.id === 'FROM_COMPANY') {
					this.onpForm.forEach(onpFormItem => {
						if (onpFormItem.id !== 'FROM_COMPANY' && onpFormItem.id !== 'REC_ID') {
							onpFormItem.hide = true
							onpFormItem.value = ''
							onpFormItem.validated = true
						}
					})
					let activeStandardItems = this.onpFormData.filter(standardFormItem => standardFormItem['from_company'] === val)
					this.setTypeOptionsInOnpForm(activeStandardItems, 'transaction_type', 'TYPE')
					return
				}
				const partnerVal = this.onpForm.filter(onpFormItem => onpFormItem.id === 'FROM_COMPANY')[0].value
				if (formItem.id === 'TYPE') {
					this.onpForm.forEach(onpFormItem => {
						if (onpFormItem.id !== 'FROM_COMPANY' && onpFormItem.id !== 'TYPE' && onpFormItem.id !== 'REC_ID') {
							onpFormItem.hide = true
							onpFormItem.value = ''
							onpFormItem.validated = true
						}
					})
					let activeStandardItems = this.onpFormData.filter(standardFormItem => standardFormItem['from_company'] === partnerVal && standardFormItem['transaction_type'] === val)
					if (activeStandardItems.length < 1) {
						return
					} else {
						this.setOptionsInOnpForm(activeStandardItems, 'transaction_code', 'TRANSACTION_CODE')
					}
					return
				}
				const typeVal = this.onpForm.filter(onpFormItem => onpFormItem.id === 'TYPE')[0].value
				if (formItem.id === 'TRANSACTION_CODE') {
					const transactionCodeVal = val
					this.onpForm.forEach(onpFormItem => {
						if (onpFormItem.id !== 'FROM_COMPANY' && onpFormItem.id !== 'TYPE' && formItem.id !== 'TRANSACTION_CODE') {
							onpFormItem.hide = true
							onpFormItem.value = ''
							onpFormItem.validated = true
						}
					})
					if (transactionCodeVal) {
						const activeStandardItems = this.onpFormData.filter(standardFormItem => standardFormItem['from_company'] === partnerVal && standardFormItem['transaction_type'] === typeVal && standardFormItem['transaction_code'] === transactionCodeVal)
						const unitLabelValue = activeStandardItems[0]['unit_label']
						const idx = this.onpForm.findIndex(item => item.id === 'UNIT_LABEL')
						this.onpForm[idx].value = unitLabelValue
						const idsToChange = ['LABEL', 'PRICE', 'UNIT_LABEL', 'UNIT_DEFAULT_VALUE']
						if (val.length > 0 && typeVal !== '002') {
							this.onpForm.forEach(onpFormItem => {
								if (idsToChange.indexOf(onpFormItem.id) > -1) {
									onpFormItem.hide = false
								}
							})
						}
					}
				}
			},
			setIsSortDropdown(e) {
				this.isSortDropdown = !this.isSortDropdown
			},
			setTheReadMoreOnp(e) {
				this.theReadMoreOnp === e.REC_ID ? this.theReadMoreOnp = null : this.theReadMoreOnp = e.REC_ID
			},
			closeSortDropdown() {
				this.isSortDropdown && (this.isSortDropdown = !1)
			},
			setTheSortSetting(e) {
				setTimeout(t => {
					this.isCases ? (this.theSortSettingCases = e, "undefined" != typeof Storage && window.localStorage.setItem("sortSettingCases", JSON.stringify(e))) : (this.theSortSettingDocs = e, "undefined" != typeof Storage && window.localStorage.setItem("sortSettingDocs", JSON.stringify(e)))
				}, 0)
			},
			clearSearchQuery() {
				this.$refs.v_search_query && (this.$refs.v_search_query.value = ""), this.searchQuery = ""
			},
			debounceSearch(e) {
				this.searchQuery = "", clearTimeout(this.debounce), this.debounce = setTimeout(() => {
					this.searchQuery = e.target.value
				}, 600)
			},
			loadMoreCases() {
				if (this.isCases) {
					if (this.searchedCases.length < 50) {
						this.infiniteScrollNumber = 50;
						return
					} !(this.infiniteScrollNumber > this.searchedCases.length) && (this.infiniteScrollNumber += 50)
				}
			},
			onCaseClicked(caseInfo, token) {
				// Disable auto-update
				run_autoupdate = false;

				// Find the index of the clicked case
				let caseIndex = this.cases.findIndex(c => c.onid === caseInfo.onid);

				// If the case is found, set it as the original active case
				if (caseIndex > -1) {
					this.theOrignalActiveCase = this.cases[caseIndex];
				}

				// Set case information
				let caseId = caseInfo.onid;
				let caseToken = caseInfo.onid_token;

				// Add mutation observer to the single case
				addMutationOberserverToSingleCase();

				// Add loading class to modal body
				let modalBody = $(".js-modal__single-case .o-modal__body");
				if (!modalBody.hasClass("o-modal__body--loading")) {
					modalBody.addClass("o-modal__body--loading");
				}

				// Add classes to overlay and modal
				$(".o-bg-overlay").addClass("o-bg-overlay--active");
				$(".o-modal__case").addClass("o-modal--active");

				// Disable body scrolling
				$("body").css("overflow", "hidden");

				// Clone and insert case element into modal
				let caseElement = $(".case_element[data-onid=" + caseId + "][data-onid_token=" + caseToken + "]");
				$(caseElement).clone().attr("id", "js-case-element__inserted").appendTo(".js-case-insert");

				// Set data attributes on modal
				$(".o-modal__case").attr("data-case-id", caseId);
				$(".o-modal__case").attr("data-case-id-token", caseToken);

				// Set values for input fields
				$(".ETRAY_READ_CASE_TOKEN_ID > input").val(caseToken);
				$(".ETRAY_READ_CASE_ID > input").val(caseId);
				$(".ETRAY_READ_MESSAGE_TYPE > input").val("VIEW_CASE");
				$(".ETRAY_VIEW_CASE > a").click();

				// Change select option and update UI based on user type
				subCatChangeSelect("List of Cases");

				if (this.theUserType === "ON") {
					if (caseInfo.to_company.concat(caseInfo.from_company).indexOf("OpenNet") < 0) {
						$(".js-o-modal__case__actions, .js-o-modal__case__commentary").addClass("hidden_field");
					} else {
						$(".js-o-modal__case__actions, .js-o-modal__case__commentary").removeClass("hidden_field");
					}
				}

				// Set modal title
				let modalTitle = caseId + " - " + caseInfo.filter_inquiry_type;
				$(".js-modal__single-case__title").text(modalTitle);

				// Read case and handle single case loaded event
				readEtrayCase(caseToken, caseId);

				$(document).one("etray::single-case-loaded", function () {
					$(".o-modal__body").removeClass("o-modal__body--loading");
				});

				// Set date and time picker
				setDateTimePicker();
				// START ADDED 26-11-23 For openByOtherEmp
				isSeeCaseOpenByOthers = true
				this.seeCaseOpenByOthers();
				this.setCheckCaseByOtherInInterval();
				// END ADDED 26-11-23 For openByOtherEmp
				// START 17-12-23
				this.$nextTick(_ => {
					$('#js-case-element__inserted .o-cases__case_element__header__row__tags__container').on('click', (evt) => {
						const tagType = evt.target.dataset.tagType
						const caseItem = this.cases[caseIndex]
						this.setTheActiveTagDropdown(tagType, caseItem, evt)
					})
				})
			},
			// START ADDED 26-11-23 For openByOtherEmp
			seeCaseOpenByOthers() {
				if (!isSeeCaseOpenByOthers) {
					return
				}
				$('.updCaseIdSession_Type > input').val('KEEP_ALIVE');
				$('.updCaseIdSession_Output > div').html('');
				$('.updCaseIdSession_BTN > a').click();

				const observeCaseOpenChanges = (selector, callback) => {
					const el = $(selector)
					if (!el || el.length === 0) {
						console.warn(`No element found with selector ${selector}`)
						return;
					}
					el.html('loading');
					intervalObserveCaseOpenChanges = setInterval(() => {
						const val = el.html()

						if (val !== 'loading') {
							clearInterval(intervalObserveCaseOpenChanges)
							callback(val)
						}
					}, 1000)
				}

				observeCaseOpenChanges('.updCaseIdSession_Output > div', (OK) => {
					const whoHasItOpen = $('.openByOtherEmp > input').val()
					const whoHasItOpenToJSON = whoHasItOpen.length > 1 ? JSON.parse(whoHasItOpen) : []
					const caseId = this.theOrignalActiveCase.onid;
					const caseToken = this.theOrignalActiveCase.onid_token;
					const caseIndex = this.cases.findIndex(c => c.onid === this.theOrignalActiveCase.onid);
					if (caseIndex > -1) {
						this.cases[caseIndex]['openByOtherEmp'] = whoHasItOpenToJSON;
						// Update case element in modal with Jquery
						let htmlArr = []
						whoHasItOpenToJSON.forEach((name, key) => {
							const initials = name.split(' ').map(word => word.charAt(0)).join('')
							const htmlEl = '<li class="o-case-active-users__user hint--bottom" aria-label="' + name + '">' + initials + '</li>'
							htmlArr.push(htmlEl)
						})
						$(".js-case-insert .o-case-active-users").html(htmlArr.join(''));
					}
				})
			},
			setCheckCaseByOtherInInterval() {
				intervalSeeCaseOpenByOthersTimer = setInterval(() => {
					this.seeCaseOpenByOthers()
				}, 1000 * 30)
			},
			// END ADDED 26-11-23 For openByOtherEmp
			CreateExtDocument(e) {
				run_autoupdate = !1;
				var t, s = new Date,
					a = String(s.getDate()).padStart(2, "0");
				s = a + "-" + String(s.getMonth() + 1).padStart(2, "0") + "-" + s.getFullYear(), $(".EXT_DOCS_TIME_START > input").val(s), $(".EXT_DOCS_TIME_END > input").val(), "Announcement" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_ANNOUNCEMENT > input").val()), $(".js-modal-create-title").text("Opret udmelding")), "Report" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_REPORT > input").val()), $(".js-modal-create-title").text("Opret rapport")), "Documentation" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_DOCUMENTATION > input").val()), $(".js-modal-create-title").text("Opret dokumentation")), "Invoices" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_INVOICE > input").val()), $(".js-modal-create-title").text("Opret faktura")), "Contract" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_CONTRACT > input").val()), $(".js-modal-create-title").text("Opret kontrakt")), window.scroll(0, 0), subCatChangeSelect("Create ext docs"), $(".EXT_DOCS_ORDER_TYPE > input").val(e), $(".EXT_DOCS_EVENT_TYPE > input").val("NEW"), $(".EXT_DOCS_PAGE_IDS > input").val(""), $(".EXT_DOCS_HEADLINE > input").val(""), $(".EXT_DOCS_MESSAGE > input").val(""), $(".EXT_DOCS_MESSAGE > textarea").val(""), window.matchMedia("(max-width: 600px)").matches && closeBurgerMenu(), $(".o-bg-overlay").addClass("o-bg-overlay--active"), $(".js-o-modal__create-case").addClass("o-create-case--active"), $("body").css("overflow", "hidden");
				var i = $(".EXT_RECIEVERS_JSON_NEW > div").html();
				createTogglerForReceivers(i, document.querySelector(".EXT_DOCS_RECIEVERS_DISPLAY_NEW > div"))
			},
			editExtDocumentDirect(e, t) {
				$(".EXT_DOCS_CASE_ID > input").val(item.onid), editExtDocument(e)
			},
			editExtDocument(e) {
				window.scroll(0, 0), "Announcement" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_ANNOUNCEMENT > input").val()), $(".js-modal-create-title").text("Rediger udmelding")), "Report" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_REPORT > input").val()), $(".js-modal-create-title").text("Rediger rapport")), "Documentation" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_DOCUMENTATION > input").val()), $(".js-modal-create-title").text("Rediger dokumentation")), "Invoices" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_INVOICE > input").val()), $(".js-modal-create-title").text("Rediger faktura")), "Contract" == e && ($(".EXT_DOCS_TYPE > select").html($(".DROPDOWN_LIST_CONTRACT > input").val()), $(".js-modal-create-title").text("Rediger kontrakt")), $.TRIGGER_AFTER_EXT_DOC_RENDERRING = !1, $(".EXT_DOCS_FETCHED > input").val("N"), $(".EXT_DOCS_FETCHED > input").change(), $(".UPDATE_EXT_FIELDS").hasClass("hidden_field") || $(".UPDATE_EXT_FIELDS").addClass("hidden_field"), $(".EXT_DOCS_LOADING").hasClass("hidden_field") && $(".EXT_DOCS_LOADING").removeClass("hidden_field"), subCatChangeSelect("Edit ext docs"), $(".EXT_DOCS_ORDER_TYPE > input").val(e), $(".EXT_DOCS_PAGE_IDS > input").val(""), $(".BTN_GetExtDocsCaseInfo > a").click(), window.matchMedia("(max-width: 600px)").matches && closeBurgerMenu(), $(".o-bg-overlay").addClass("o-bg-overlay--active"), $(".js-o-modal__create-case").addClass("o-create-case--active"), $("body").css("overflow", "hidden"), this.closeVueModalOverlay()
			},
			dateIsAfterToday: e => new Date(e).valueOf() > new Date().valueOf(),
			formatDateForJs(e, t) {
				if (19 === e.length || 16 === e.length || 10 === e.length) {
					var s = e.split(/(?:-| )+/),
						a = s[3] ? s[3] : "00:00";
					return new Date(s[2] + "-" + s[1] + "-" + s[0] + " " + a)
				}
				if (!t) return new Date(null);
				var s = (t.created_time ? t.created_time : t.active_date).split(/(?:-| )+/),
					a = s[3] ? s[3] : "00:00",
					i = 1 * s[2] - 10;
				return new Date(i + "-" + s[1] + "-" + s[0] + " " + a)
			},
			formatDateForJs2TypsOfDates(dateString, fallback) {
				const dateFormat1 = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/;
				const dateFormat2 = /^\d{4}-\d{2}-\d{2}$/;

				let date;
				if (dateFormat1.test(dateString)) {
					date = new Date(dateString.replace(/(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})/, '$3-$2-$1T$4:$5:00'));
				} else if (dateFormat2.test(dateString)) {
					date = new Date(dateString);
				} else if (fallback) {
					const dateStringFallback = fallback.created_time || fallback.active_date;
					if (dateFormat1.test(dateStringFallback)) {
						date = new Date(dateStringFallback.replace(/(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})/, '$3-$2-$1T$4:$5:00'));
					} else if (dateFormat2.test(dateStringFallback)) {
						date = new Date(dateStringFallback);
					}
				}

				return date || new Date(null);
			},
			onItemClicked(e) {
				if (run_autoupdate = !1, $(".EXT_DOCS_CASE_ID > input").val(e.onid), $(".ETRAY_READ_CASE_TOKEN_ID > input").val(e.tid), $(".ETRAY_READ_CASE_ID > input").val(e.onid), $(".ETRAY_READ_MESSAGE_TYPE > input").val("VIEW_CASE"), $(".ETRAY_VIEW_CASE > a").click(), this.theActiveItem = e, this.isVueModalOverlay = !0, $("body").css("overflow", "hidden"), "Yes" == e.show_unread_icon) {
					let t = this.items.findIndex(t => t.onid === e.onid);
					this.theActiveItem.show_unread_icon, Vue.set(this.items[t], "show_unread_icon", "No")
				}
			},
			downloadItem(e) {
				if ($(".EXT_DOCS_CASE_ID > input").val(e.onid), $(".BTN_ViewExtCase > a").click(), "Yes" == e.show_unread_icon) {
					let t = this.items.findIndex(t => t.onid === e.onid);
					Vue.set(this.items[t], "show_unread_icon", "No")
				}
			},
			closeVueDropdown() {
				this.isVueDropdown && (this.isVueDropdown = !this.isVueDropdown)
			},
			setIsVueDropdown() {
				this.isVueDropdown = !this.isVueDropdown
			},
			setTheUnreadSelected(e) {
				this.theUnreadSelected = e
			},
			setActivecCategory(e, t) {
				if (e !== this.activeCategory) {
					window.scroll(0, 0)

					if (e == "OpenAnalytics") {
						$(".o-wrapper").addClass("OpenAnalytics_full_width")
					}
					else {
						$(".o-wrapper").removeClass("OpenAnalytics_full_width")
					}

					$('ul.o-menu__items__inner > li[class^="js-"]').each(function () {
						$(this).removeClass("li--active")
					})
					$(".js-o-cases__container").removeClass("o-cases__container--loading"), $(".o-page").removeClass("o-page--all-cases"), $(".o-page").hasClass("o-page--docs") || $(".o-page").addClass("o-page--docs");
					var s = "";
					this.setIsShowOperationStatusErrorReports(false)
					this.setIsShowNewsCases(false)
					switch (e) {
						case "my_cases":
							s = "Hjem / Mine sager";
							break;
						case "all_cases":
							s = "Alle sager";
							break;
						case "Announcement":
							s = "Udmeldinger";
							break;
						case "Contract":
							s = "Kontrakter";
							break;
						//< !--START OpenNet OpenAnalytics-- >
						case "OpenAnalytics":
							s = "OpenAnalytics";
							break;
						//< !--END  OpenNet OpenAnalytics-- >
						case "Invoice":
							s = "Fakturaer";
							break;
						case "Documentation":
							s = "Dokumenter";
							break;
						case "Report":
							s = "Rapporter";
							break;
						case "roles":
							s = "Brugeradministration";
							break;
						case "end_customer_pricing_config":
							s = "Slutkundepriser – Konfiguration";
							break;
						case "end_customer_orders":
							s = "Slutkundeordre"
							break
						case "OperationsStatus":
							s = "Driftstatus"
							break
						case "News":
							s = "Nyheder"
							break
					}
					if ("Report" === e || "Invoice" === e || "OpenAnalytics" === e) {
						// Retrieve HTML content from the specified element
						var PBIListOfReportsHTML = $(".PBI_ListOfReports > div").html();
						console.log('$(".PBI_ListOfReports > div").html()', $(".PBI_ListOfReports > div").html());

						if (PBIListOfReportsHTML.length > 3) {
							this.PBIReportsData = JSON.parse(PBIListOfReportsHTML);
						}

						this.theInvoiceBIExplainer = $(".PBI_Intro_Invoice > div").html()
						this.theReportBIExplainer = $(".PBI_Intro_Report > div").html()
					}
					switch (e) {
						case "end_customer_orders":
							this.readEndCustomerOrders()
								;
							break;
						case "end_customer_pricing_config":
							this.readEndCustomerConfigs();
							break;
						case "roles":
							this.readUsers();
							break;
						default:
							break;
					}
					$(".js-page-title").text(s);

					this.activeCategory = e;
					if (this.isNewDesignActive && (this.activeCategory === 'my_cases' || this.activeCategory === 'all_cases')) {
						this.getAllLocalStorageFilter()
						return
					}
					this.resetFilters();
					if (e === 'OpenAnalytics') {
						this.setTheActiveFilter('')
					}
				}
			},
			resetFilters() {
				this.infiniteScrollNumber = 50;
				this.clearSearchQuery();
				this.activeType = null;
				$(".vue-filter-2").each(function () {
					$(this).removeClass("o-btn__filter---active");
				});
				this.theUnreadSelected = "Alle";
				this.theActiveFilter = "active";
				this.theActiveCaseCategory = "Alle kategorier";
				this.theActiveOnpProductListFilter = "Fra alle";
			},
			setActiveCaseCategory(e) {
				this.theActiveCaseCategory = e
			},
			setTheActiveFilter(event) {
				this.theActiveFilter = event;
				this.clearSearchQuery();
				this.theUnreadSelected = "Alle";

				// Set the active type to null
				this.activeType = null;
				$(".vue-filter-2").each(function () {
					$(this).removeClass("o-btn__filter---active");
				})
				if (this.isNewDesignActive && (this.activeCategory === 'my_cases' || this.activeCategory === 'all_cases')) {
					this.getAllLocalStorageFilter()
				}
				//if (event == 'dynamic') {
				//	this.theUnreadSelected = "Vælg";
				//}
				if (this.activeCategory !== 'OpenAnalytics') {

					return
				}
				// For OpenAnalytics
				this.setIframeForOpenAnalytics()
			},
			setIframeForOpenAnalytics() {
				openAnalyticsSecret = JSON.parse($('.PBI_sharedSecretJSON > input').val()).sharedSecret;
				console.log('openAnalyticsSecret', openAnalyticsSecret);
				this.isLoadingTheOpenAnalyticsIframe = true
				function constructURLWithSecret(baseURL, secretValue) {
					const queryParams = new URLSearchParams(window.location.search);
					queryParams.set('secret', secretValue);
					const newURL = `${baseURL}?${queryParams.toString()}`;
					return newURL;
				}
				if (this.theActiveFilter === 'OpenAnalytics_tab1') {
					const openAnalyticsUrl = 'https://opn-iframes-dev.azurewebsites.net/1';
					this.theOpenAnalyticsIframeUrl = constructURLWithSecret(openAnalyticsUrl, openAnalyticsSecret)
					// For demonstration purpose
					const openAnalyticsIframeURL = constructURLWithSecret(openAnalyticsUrl, openAnalyticsSecret);
					console.log(openAnalyticsIframeURL);
				}
				if (this.theActiveFilter === 'OpenAnalytics_tab2') {
					const openAnalyticsUrl = 'https://opn-iframes-dev.azurewebsites.net/2';
					this.theOpenAnalyticsIframeUrl = constructURLWithSecret(openAnalyticsUrl, openAnalyticsSecret)
				}
				// Wait for Vue's next tick to ensure the DOM updates
				this.$nextTick(() => {
					const iframe = this.$refs.openAnalyticsIframe;
					if (iframe) {
						iframe.onload = () => {
							this.addIframeEventListeners(iframe);
						};
					}
				})
			},
			addIframeEventListeners(iframe) {
				const self = this
				const handleMessage = (event) => {
					console.log('message!', event)
					if (event.origin !== 'https://opn-iframes-dev.azurewebsites.net') {
						return; // Ensure the message is from a trusted origin
					}
					if (event.data.event === 'Inspari_iframeChanged') {
						console.log('Inspari_iframeChanged event received', event.data);
						// Handling Inspari_iframeChanged event to adjust iframe size
						var iframe = document.querySelector('.o-iframe-container');

						if (current_iframeHeight != event.data.iframeHeight) {
							console.log('Current iframe height', current_iframeHeight);
							iframe.style.height = event.data.iframeHeight + 'px';
							console.log('New iframe height', event.data.iframeHeight);
							current_iframeHeight = event.data.iframeHeight;
						}
					}

					if (event.data.event === 'Inspari_iframeLoaded') {
						self.isLoadingTheOpenAnalyticsIframe = false
						console.log('Inspari_iframeLoaded event received', event.data);
						var iframe = document.querySelector('.o-iframe-container');
						if (current_iframeHeight != event.data.iframeHeight) {
							console.log('Current iframe height', current_iframeHeight);
							iframe.style.height = event.data.iframeHeight + 'px';
							console.log('New iframe height', event.data.iframeHeight);
							current_iframeHeight = event.data.iframeHeight;
						}
					}
				};

				window.addEventListener('message', handleMessage);

				this.$once('hook:beforeDestroy', () => {
					window.removeEventListener('message', handleMessage);
				});
			},
			setActiveType(event, target) {
				// Reset the infinite scroll number
				this.infiniteScrollNumber = 50;
				$(".vue-filter-2").removeClass("o-btn__filter---active");

				// Toggle the active type
				if (this.activeType === event) {
					this.activeType = null;
				} else {
					this.activeType = event;
					$(target.currentTarget).addClass("o-btn__filter---active");
				}

				// Added 17-12-23
				if (this.activeCategory === 'my_cases' || this.activeCategory === 'all_cases') {
					this.setLocalStorageFilter('activeType', this.activeType)
					return
				}
			},
			createUserModal() {
				window.scroll(0, 0), subCatChangeSelect("Create User"), Set_UM_USER_INIT = !0, $(".UM_DISPLAY_NAME > input").val(""), $(".UM_COPY_OF > select").val(""), $(".UM_USER_ID > input").val(""), $(".UM_USER_INIT > input").val(""), $(".UM_USER_INIT > .Web_Error").html(""), $(".UM_USER_INIT > .Web_Error").hide(), $(".UM_USER_NAME > input").val(""), $(".UM_EMAIL > input").val(""), $(".UM_GROUP_ID > input").val(""), $(".UM_MOBILE_NO > input").val(""), $(".UM_PASSWORD > input").val(""), $(".UM_EVENT_TYPE > input").val(""), $(".o-bg-overlay").addClass("o-bg-overlay--active"), $(".js-o-modal__create-case").addClass("o-create-case--active"), $("body").css("overflow", "hidden"), $(".js-modal-create-title").text("Opret bruger")
			},
			searchFunc(e) {
				function matchObjects(obj1, obj2) {
					var key;
					for (key in obj1) {
						if (obj1[key] !== obj2[key]) {
							return false;
						}
					}
					for (key in obj2) {
						if (obj1[key] !== obj2[key]) {
							return false;
						}
					}
					return true;
				}

				function matchArray(arr, obj) {
					var i;
					for (i = 0; i < arr.length; i++) {
						if (matchObjects(arr[i], obj)) {
							return true;
						}
					}
					return false;
				}

				var results = [],
					searchQuery = function (value) {
						var start = 0,
							end = value.length - 1;
						while (start < value.length && value[start] === ' ') {
							start++;
						}
						while (end > start && value[end] === ' ') {
							end--;
						}
						return value.substring(start, end + 1);
					}(this.searchQuery.toLowerCase()),
					i,
					j,
					item,
					propertyValue;
				for (i = 0; i < e.length; i++) {
					for (j in e[i]) {
						if (e[i].hasOwnProperty(j)) {
							item = e[i][j];
							if (typeof item === 'string') {
								item = item.toLowerCase();
							} else if (typeof item === 'number') {
								item = item.toString();
							}
							if (typeof item === 'string' && item.indexOf(searchQuery) !== -1 && !matchArray(results, e[i])) {
								results.push(e[i]);
								break;
							}
						}
					}
				}
				return results;
			},
			setTheActiveUser(e) {
				this.theActiveUser = e
			},
			closeActiveUserModal() {
				this.theActiveUser = null
			},
			rolesInView(e) {
				var t = e;
				this.isProfileClick && (t = e.filter(e => "true" == e.active_role));
				var s = [];
				return t.forEach(e => {
					var t = s.findIndex(t => t.group === e.group_category);
					t < 0 ? s.push({
						group: e.group_category,
						roles: [e]
					}) : s[t].roles.push(e)
				}), s
			},
			onActiveGroupChange(e, t, s) {
				var a = e.role_array.filter(e => e.group_category == t),
					i = s ? "true" : "false";
				this.toggle_group_ids = [], a.forEach((t, s) => {
					var r = a.length - 1 == s;
					this.onActiveRoleChange(e, t.group_id, i, !0, r)
				})
			},
			getIsGroupCategoryActive: (e, t) => e.role_array.filter(e => e.group_category == t).filter(e => "true" == e.active_role).length > 0,
			onActiveRoleChange(e, t, s, a, i) {
				var r = this.users.findIndex(e => e.id == this.theActiveUser.id),
					o = this.theActiveUser.role_array.findIndex(e => e.group_id == t),
					n = "false" == s ? "true" : "false";
				if (this.theActiveUser.role_array[o].active_role = n, this.users[r].role_array[o].active_role = n, a) {
					if (this.toggle_group_ids.push(t), i) {
						var l = this.toggle_group_ids.join(";");
						"true" == n && ($(".UM_EVENT_TYPE > input").val("ADD_GROUP"), $(".UM_USER_ID > input").val(e.id), $(".UM_GROUP_ID > input").val(l), $(".BTN_UserManagement > a").click()), "false" == n && ($(".UM_EVENT_TYPE > input").val("REMOVE_GROUP"), $(".UM_USER_ID > input").val(e.id), $(".UM_GROUP_ID > input").val(l), $(".BTN_UserManagement > a").click())
					}
				} else "true" == n && ($(".UM_EVENT_TYPE > input").val("ADD_GROUP"), $(".UM_USER_ID > input").val(e.id), $(".UM_GROUP_ID > input").val(t), $(".BTN_UserManagement > a").click()), "false" == n && ($(".UM_EVENT_TYPE > input").val("REMOVE_GROUP"), $(".UM_USER_ID > input").val(e.id), $(".UM_GROUP_ID > input").val(t), $(".BTN_UserManagement > a").click())
			},
			onActiveRoleNotificationsChange(e, t, s) {
				var a = this.users.findIndex(e => e.id == this.theActiveUser.id),
					i = this.theActiveUser.role_array.findIndex(e => e.group_id_noti == t),
					r = "false" == s ? "true" : "false";
				this.theActiveUser.role_array[i].active_role_noti = r, this.users[a].role_array[i].active_role_noti = r, "true" == r && ($(".UM_EVENT_TYPE > input").val("ADD_GROUP"), $(".UM_USER_ID > input").val(e.id), $(".UM_GROUP_ID > input").val(t), $(".BTN_UserManagement > a").click()), "false" == r && ($(".UM_EVENT_TYPE > input").val("REMOVE_GROUP"), $(".UM_USER_ID > input").val(e.id), $(".UM_GROUP_ID > input").val(t), $(".BTN_UserManagement > a").click())
			},
			setTheActiveUserRoleChangeModal(e) {
				this.theActiveUser = e, this.isEditUserRoles = !0, this.isVueModalOverlay = !0, $("body").css("overflow", "")
			},
			setTheEditUserModal(e, t) {
				t ? this.isProfileClick = !0 : this.isProfileClick = !1, this.theActiveUser = e, this.isEditUser = !0, this.userform.name = e.name, this.userform.display_name = e.display_name, this.userform.user_init = e.user_init, this.userform.email = e.email, this.userform.sms_no = e.sms_no, this.isVueModalOverlay = !0, $("body").css("overflow", "")
			},
			resetEditUserForm() {
				this.userform.name = "", this.userform.display_name = "", this.userform.email = "", this.userform.user_init = "", this.userform.sms_no = "", this.userform.new_password = "", this.userform.new_password_confirmed = ""
			},
			toggleRolesAcc(e) {
				var t = this.theToggleRolesAcc.indexOf(e);
				this.theToggleRolesAcc.indexOf(e) > -1 ? this.theToggleRolesAcc.splice(t, 1) : this.theToggleRolesAcc.push(e)
			},
			getIsInTheToggleRolesAcc(e) {
				return this.theToggleRolesAcc.indexOf(e) > -1
			},
			closeVueModalOverlay() {
				run_autoupdate = true;
				this.run_autoupdate_func();
				this.isVueModalOverlay = false;
				this.theActiveUser = null;
				this.isEditUserRoles = false;
				this.isEditUser = false;
				this.isProfileClick = false;
				this.theActiveItem = null;
				this.isCreateOnpModal = false;
				this.resetEditUserForm();
				$("body").css("overflow", "");
				$("body").removeClass("no-scroll")
				this.isSendingEmail = false;
				this.formErrors = {};

				this.onpForm.forEach((element, index) => {
					element.value = "";
					element.validated = true;
				});

				this.isNewOrderModal = false;
				this.isOrderCustomerEmailValid = true;
				this.orderCustomerEmail = "";
				this.OnpSSIDDetails = [];
				this.ssid = "";
				this.theActiveDescExpanded = null;
				this.isSSIDValid = true;
				this.theActivePrevOrder = null;
				this.theNewOrderSkaderItems = []
				this.theActiveOrderType = '001'
				this.isEndCustomerEmailConfigModal = false
				this.isUpdatingEndCustomerEmailConfigForm = false
				this.theEndCustomerEmailConfigForm.forEach(item => {
					item.value = ''
				})
				this.isGhostUserCreating = false
				this.isCreateGhostUser = false
				this.theGhostUserSelectedPartner = null
				this.theGhostUserSelectedPartnerUser = null
			},
			formValidation() {
				this.userform.name.length < 1 ? Vue.set(this.formErrors, "name", "Skal mindst 1 tegn") : this.removeErrors("name"), this.userform.display_name.length < 1 ? Vue.set(this.formErrors, "display_name", "Skal mindst 1 tegn") : this.removeErrors("display_name"), this.userform.user_init.length < 1 ? Vue.set(this.formErrors, "user_init", "Skal mindst 1 tegn") : this.removeErrors("user_init"), this.validateEmail(this.userform.email) ? this.removeErrors("email") : Vue.set(this.formErrors, "email", "Skal v\xe6re en gyldig emailaddresse"), this.userform.sms_no.length < 8 ? Vue.set(this.formErrors, "sms_no", "Skal v\xe6re et gyldigt telefonnummer") : this.removeErrors("sms_no"), this.userform.sms_no.length < 8 ? Vue.set(this.formErrors, "sms_no", "Skal v\xe6re et gyldigt telefonnummer") : this.removeErrors("sms_no"), this.userform.new_password != this.userform.new_password_confirmed ? Vue.set(this.formErrors, "new_password_confirmed", "Kodeordene skal v\xe6re det ens") : this.removeErrors("new_password_confirmed")
			},
			validateEmail: e => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),
			removeErrors(e) {
				this.$delete(this.formErrors, e)
			},
			onkeyup_user_init(e) {
				this.$delete(this.formErrors, e), clearTimeout(this.debounce_user_init), this.debounce_user_init = setTimeout(() => {
					$(".UM_USER_INIT > input").val(this.userform.user_init), Set_UM_USER_INIT = !1, $(".BTN_GetUserValidation > a").click(), $(".BTN_GetUserValidation_Result > input").val("N"), WAIT_FOR_UM_USERNAME_VALIDATION_ANSWER_VUE()
				}, 600)
			},
			submitEditUserForm() {
				if (!(Object.keys(this.formErrors).length > 0)) this.formValidation(), !(Object.keys(this.formErrors).length > 0) && ($(".UM_EVENT_TYPE > input").val("UPDATE_USER_DETAILS"), $(".UM_USER_ID > input").val(this.theActiveUser.id), $(".UM_USER_NAME > input").val(this.userform.name), $(".UM_DISPLAY_NAME > input").val(this.userform.display_name), $(".UM_MOBILE_NO > input").val(this.userform.sms_no), $(".UM_EMAIL > input").val(this.userform.email), $(".UM_USER_INIT > input").val(this.userform.user_init), this.userform.new_password.length > 0 && $(".UM_PASSWORD > input").val(this.userform.new_password), $(".UM_RESULT > div").html(""), $(document).trigger("vue::new_user"), $(".BTN_UserManagement > a").click(), this.closeVueModalOverlay())
			},
			submitDeleteUserForm() {
				$(".UM_EVENT_TYPE > input").val("DELETE_USER"), $(".UM_USER_ID > input").val(this.theActiveUser.id), $(".UM_USER_NAME > input").val(this.userform.name), $(".UM_DISPLAY_NAME > input").val(this.userform.display_name), $(".UM_MOBILE_NO > input").val(this.userform.sms_no), $(".UM_EMAIL > input").val(this.userform.email), $(".UM_USER_INIT > input").val(this.userform.user_init), this.userform.new_password.length > 0 && $(".UM_PASSWORD > input").val(this.userform.new_password), $(".UM_RESULT > div").html(""), $(".BTN_UserManagement > a").click();
				var e = this.users.findIndex(e => e.id == this.theActiveUser.id);
				this.users.splice(e, 1), this.closeVueModalOverlay()
			},
			resetPasswordForUser(e) {
				this.isSendingEmail = !0, $(".UM_EVENT_TYPE > input").val("RESET_PASSWORD"), $(".UM_USER_ID > input").val(this.theActiveUser.id), $(".BTN_UserManagement > a").click()
			},
			setIsViewRoles(e) {
				this.theActiveRoleForFilter = this.allRoles[0] ? this.allRoles[0].group_id : "", this.isViewRoles = e
			},
			setTheActiveRoleForFilter(e) {
				this.theActiveRoleForFilter = e
			},
			numberOfUsersWithRole(e) {
				return this.users.filter(t => t.role_array.findIndex(t => t.group_id == e && "true" == t.active_role) > -1)
			},
			usersWithRole(e) {
				return this.users.filter(t => t.role_array.findIndex(t => t.group_id == e && "true" == t.active_role) > -1)
			},
			setTheOSelect(e) {
				setTimeout(t => {
					this.theOSelect = e
				}, 0)
			},
			onClickOutside(e) {
				this.theOSelect && (this.theOSelect = null, this.oSelectQuery = "")
			},
			getIsTheOSelect(e) {
				return this.theOSelect == e
			},
			selectUserForRole(e) {
				var t = this.users.findIndex(t => t.id == e.id),
					s = e.role_array.findIndex(e => e.group_id == this.theActiveRoleForFilter),
					a = "true";
				this.users[t].role_array[s].active_role = a, this.setTheOSelect(null), "true" == a && ($(".UM_EVENT_TYPE > input").val("ADD_GROUP"), $(".UM_USER_ID > input").val(e.id), $(".UM_GROUP_ID > input").val(this.theActiveRoleForFilter), $(".BTN_UserManagement > a").click()), this.oSelectQuery = ""
			},
			readLatestUpdatedDocs() {
				this.observeLatestDocsDiv && this.observeLatestDocsDiv.disconnect(), this.updateDocsTimer && clearTimeout(this.updateDocsTimer), this.funcObserveLatestDocs(), $(".BTN_GetListOfExtDocs_Last30Min > a").click()
			},
			readLatestUpdatedDocsByOthers() {
				this.funcObserveLatestDocsByOthers(), $(".BTN_GetListOfExtDocs_LatestOther > a").click()
			},
			funcObserveLatestDocsByOthers() {
				var e = this,
					t = new MutationObserver(function (s) {
						var a = $(".ETRAY_EXT_DOCS_RAW_JSON_LATEST_OTHER  > div").html();
						e.setLatestDocs(a), t.disconnect()
					});
				t.observe(document.querySelector(".ETRAY_EXT_DOCS_RAW_JSON_LATEST_OTHER  > div"), {
					characterData: !0,
					childList: !0
				})
			},
			funcObserveLatestDocs() {
				var e = this,
					t = $(".ETRAY_EXT_DOCS_RAW_JSON_LAST30MIN > div").html();
				this.observeLatestDocsDiv = new MutationObserver(function (s) {
					var a = $(".ETRAY_EXT_DOCS_RAW_JSON_LAST30MIN > div").html();
					t != a ? (e.setLatestDocs(a), e.isNewAnnouncementLoading = !1, e.isUpdatedAnnouncementLoading = !1) : (e.isNewAnnouncementLoading || e.isUpdatedAnnouncementLoading) && (e.updateDocsTimer = setTimeout(function () {
						e.readLatestUpdatedDocs()
					}, 2500)), e.observeLatestDocsDiv.disconnect()
				}), this.observeLatestDocsDiv.observe(document.querySelector(".ETRAY_EXT_DOCS_RAW_JSON_LAST30MIN > div"), {
					characterData: !0,
					childList: !0
				})
			},
			setLatestDocs(e) {
				e.length > 2 && JSON.parse(e).forEach((e, t) => {
					var s = this.items.findIndex(t => t.onid == e.onid);
					s < 0 ? this.items.push(e) : Vue.set(this.items, s, e)
				})
			},
			decode(e) {
				var t = document.createElement("textarea");
				return t.innerHTML = e, t.value
			},
			setLatestUser() {
				var e = $(".UM_RESULT > div").html();
				e.length > 2 && JSON.parse(this.decode(this.decode(e))).forEach((e, t) => {
					var s = this.users.findIndex(t => t.id == e.id);
					s < 0 ? this.users.push(e) : Vue.set(this.users, s, e)
				})
			},
			funcObserveLatestUser() {
				let e = this;
				var t = new MutationObserver(function (s) {
					e.setLatestUser(), e.isNewUserLoading = !1, t.disconnect()
				});
				t.observe(document.querySelector(".UM_RESULT > div"), {
					characterData: !0,
					childList: !0
				})
			},
			funcObserveOpenCases() {
				var e = this,
					t = new MutationObserver(function (s) {
						e.setOpenCases(), e.casesIsLoading = !1, t.disconnect(), e.readClosedCases(e.startLength, e.endLength)
					});
				t.observe(document.querySelector(".ETRAY_JSON_LIST_OF_OPEN_CASES > div"), {
					characterData: !0,
					childList: !0
				})
			},
			setOpenCases() {
				var openCasesHtml = $(".ETRAY_JSON_LIST_OF_OPEN_CASES > div").html();
				//console.log('openCasesHtml',openCasesHtml)	
				$(".js-o-cases__container").removeClass("o-cases__container--loading");
				$(".o-page").removeClass("o-page--is-loading");

				if (openCasesHtml.length >= 3) {
					this.encodeCases(openCasesHtml);
					// $(".ETRAY_JSON_LIST_OF_OPEN_CASES > div").html("");
				}
			},
			readOpenCasesV2(e, t) {
				$(".ETRAY_JSON_LIST_OF_OPEN_CASES_ROW_START > input").val(e), $(".ETRAY_JSON_LIST_OF_OPEN_CASES_ROW_END > input").val(t), this.observeOpenCasesV2 && this.observeOpenCasesV2.disconnect(), $(".ETRAY_JSON_LIST_OF_OPEN_CASES_V2 > div").html(""), this.funcObserveOpenCasesV2(), $(".BTN_GetListOfOpenCasesJSON_V2 > a").click()
			},
			funcObserveOpenCasesV2() {
				var self = this;

				self.observeOpenCasesV2 = new MutationObserver(function () {
					// Disconnect the observer
					self.observeOpenCasesV2.disconnect();

					var openCasesHtml = $(".ETRAY_JSON_LIST_OF_OPEN_CASES_V2 > div").html();
					//console.log('openCasesHtml')
					var caseLength = 0;

					// Check if openCasesHtml length is greater than 3
					if (openCasesHtml.length > 3) {
						caseLength = JSON.parse(openCasesHtml).length + 1;
						self.encodeCases(openCasesHtml);
					}

					// Check if caseLength is greater or equal to open_addLength
					if (caseLength >= self.open_addLength) {
						self.open_startLength = self.open_endLength + 1;
						self.open_endLength = self.open_endLength + self.open_addLength;

						self.readOpenCasesV2(self.open_startLength, self.open_endLength);
					} else {
						self.casesIsLoading = false;

						$(".ETRAY_JSON_LIST_OF_OPEN_CASES_V2 > div").html("");
						self.readClosedCases(self.startLength, self.endLength);

						// Remove loading status from the cases container and the page
						$(".js-o-cases__container").removeClass("o-cases__container--loading");
						$(".o-page").removeClass("o-page--is-loading");
					}
				});

				// Start observing the target node for configured mutations
				self.observeOpenCasesV2.observe(document.querySelector(".ETRAY_JSON_LIST_OF_OPEN_CASES_V2 > div"), {
					characterData: true,
					childList: true
				});
			}
			,
			readClosedCases(start, end) {
				// Set input values
				$(".ETRAY_JSON_LIST_OF_CLOSED_CASES_ROW_START > input").val(start);
				$(".ETRAY_JSON_LIST_OF_CLOSED_CASES_ROW_END > input").val(end);

				// Disconnect previous observer and clear the HTML
				if (this.observeClosedCases) {
					this.observeClosedCases.disconnect();
				}
				$(".ETRAY_JSON_LIST_OF_CLOSED_CASES > div").html("");

				// Start observing closed cases and trigger the click event
				this.funcObserveClosedCases();
				$(".BTN_GetListOfClosedCasesJSON > a").click();
			},

			funcObserveClosedCases() {
				var self = this;
				self.observeClosedCases = new MutationObserver(function (mutations) {
					self.observeClosedCases.disconnect();

					var html = $(".ETRAY_JSON_LIST_OF_CLOSED_CASES > div").html();
					var count = 0;

					if (html.length > 3) {
						count = JSON.parse(html).length + 1;
						self.pushClosedCases();
					}

					if (count >= self.addLength) {
						self.startLength = self.endLength + 1;
						self.endLength = self.endLength + self.addLength;
						self.readClosedCases(self.startLength, self.endLength);
					} else {
						self.isClosedCasesLoading = false;
						run_autoupdate = true;
						$(".ETRAY_JSON_LIST_OF_CLOSED_CASES > div").html("");
					}
				});

				self.observeClosedCases.observe(document.querySelector(".ETRAY_JSON_LIST_OF_CLOSED_CASES > div"), {
					characterData: true,
					childList: true
				});
			},

			pushClosedCases() {
				var html = $(".ETRAY_JSON_LIST_OF_CLOSED_CASES > div").html();
				this.encodeCases(html);
			},

			encodeCases(html) {
				const self = this
				if (html.length >= 3) {
					var cases = JSON.parse(html);

					cases.forEach((caseItem, index) => {
						Object.keys(caseItem).forEach(function (key, i) {
							// START ADDED 26-11-23 For openByOtherEmp
							if (key === 'openByOtherEmp' && $(".FROM_COMPANY > input").val() == "OpenNet") {
								const openByOtherEmp_arr = caseItem['openByOtherEmp'].length > 0 ? caseItem['openByOtherEmp'] : []
								const vOpenByOtherObj = openByOtherEmp_arr.map(name => {
									const initials = name.split(' ').map(word => word.charAt(0)).join('');
									return {
										initials: initials,
										name
									}
								})
								Vue.set(caseItem, 'v_openByOtherEmp', vOpenByOtherObj)
								// START ADDED 17-12-23
							} else if (key === 'tags') {
								const tags = caseItem['tags'].length > 0 ? caseItem['tags'] : [];
								const filteredTags = tags.filter(item => item && typeof item === 'object' && item['value']);
								Vue.set(caseItem, 'v_tags', filteredTags);
							} else if (key === 'groups') {
								const groups = caseItem['groups'].length > 0 ? caseItem['groups'] : [];
								const filteredGroups = groups.filter(item => item && typeof item === 'object' && item['value']);
								Vue.set(caseItem, 'v_groups', filteredGroups);
							} else if (key === 'status') {
								const initStatus = caseItem['status'].length > 0 ? caseItem['status'] : '';
								const statusI18N = self.statusI18N[initStatus] ? self.statusI18N[initStatus] : ''
								Vue.set(caseItem, 'v_status', statusI18N);
							}
							// END ADDED 17-12-23
							else {
								caseItem[key] = unescape(caseItem[key])
							}
							// END ADDED 26-11-23 For openByOtherEmp
						});

						if (this.theUser) {
							if (caseItem.created_by_id && caseItem.created_by_id == this.theUser.id) {
								Vue.set(caseItem, "filter_created_by_me", "true");
								Vue.set(caseItem, "filter_my_cases", "true");
							}

							if (caseItem.assign_to_id && caseItem.assign_to_id == this.theUser.id) {
								Vue.set(caseItem, "filter_assigned_me", "true");
								Vue.set(caseItem, "filter_my_cases", "true");
							}

							if (caseItem.followed_by_list && caseItem.followed_by_list.split(";").indexOf(this.theUser.id) > -1) {
								Vue.set(caseItem, "filter_followed_by_me", "true");
								Vue.set(caseItem, "filter_my_cases", "true");
							}
						} else {
							this.isEncodedHappenedBeforeUser = true;
						}

						var existingIndex = this.cases.findIndex(item => item.onid == caseItem.onid);

						if (existingIndex < 0) {
							this.cases.push(caseItem);
						} else {
							Vue.set(this.cases, existingIndex, caseItem);
						}
					});
				}
			},
			readNewCase() {
				this.funcObserveLatestCases(), $(".BTN_GetListOfUpdatedCasesJSON > a").click()
			},
			readLatestUpdatedCases() {
				this.updateCasesTimer && clearTimeout(this.updateCasesTimer), this.funcObserveLatestCases(), $(".BTN_GetListOfUpdatedCasesJSON > a").click()
			},
			getDoesOnIdExist(e) {
				if (!(e.length < 3)) {
					var t = JSON.parse(e),
						s = !1;
					return t.forEach(e => {
						Object.keys(e).forEach(function (t, s) {
							e[t] = unescape(e[t])
						}), 0 > this.cases.findIndex(t => t.onid == e.onid) && "true" == e.filter_created_by_me && (s = !0)
					}), s
				}
			},
			shallowEqual(e, t) {
				let s = Object.keys(e),
					a = Object.keys(t);
				if (s.length !== a.length) return !1;
				for (let i of s)
					if ("last_updated_time" != i && e[i] !== t[i]) return !1;
				return !0
			},
			getIsCaseWithIdUpdated(e) {
				let t = this;
				if (!(e.length < 3)) {
					var s = JSON.parse(e),
						a = !1;
					return s.forEach(e => {
						if (Object.keys(e).forEach(function (t, s) {
							e[t] = unescape(e[t])
						}), e.onid == t.theCaseUpdatingId) {
							var s = this.cases.findIndex(t => t.onid == e.onid);
							s > -1 && (a = !t.shallowEqual(this.cases[s], e))
						}
					}), a
				}
			},
			funcObserveLatestCases() {
				$(".ETRAY_JSON_LIST_OF_UPDATED_CASES > div").html("");
				var e = this;
				this.observeLatestCasesDiv = new MutationObserver(function (t) {
					var s = $(".ETRAY_JSON_LIST_OF_UPDATED_CASES > div").html();
					e.isNewCaseLoading ? e.getDoesOnIdExist(s) ? (e.setLatestCases(), e.isNewCaseLoading = !1) : e.isNewCaseLoading && (e.updateCasesTimer = setTimeout(function () {
						e.readLatestUpdatedCases()
					}, 2500)) : e.isCaseUpdating ? e.getIsCaseWithIdUpdated(s) ? (e.setLatestCases(), e.isCaseUpdating = !1, e.theCaseUpdatingId = null) : e.isCaseUpdating && (e.updateCasesTimer = setTimeout(function () {
						e.readLatestUpdatedCases()
					}, 2500)) : e.setLatestCases(), e.observeLatestCasesDiv.disconnect()
				}), this.observeLatestCasesDiv.observe(document.querySelector(".ETRAY_JSON_LIST_OF_UPDATED_CASES > div"), {
					characterData: !0,
					childList: !0
				})
			},
			setLatestCases() {
				var e = document.querySelector(".ETRAY_JSON_LIST_OF_UPDATED_CASES > div").innerHTML;
				this.encodeCases(e)
			},
			funcObserveThisUser() {
				let e = this;
				var t = new MutationObserver(function (s) {
					e.setThisUser(), t.disconnect()
				});
				t.observe(document.querySelector(".ETRAY_USER_PROFILE_USER_RAW_JSON > div"), {
					characterData: !0,
					childList: !0
				})
			},
			setThisUser() {
				var e = $(".ETRAY_USER_PROFILE_USER_RAW_JSON > div").html();
				if (!(e.length < 1)) {
					var t = JSON.parse(e);
					this.theUser = t[0], this.setUsers(e), $(".ETRAY_USER_PROFILE_USER_RAW_JSON > div").html("")
				}
			},
			readUsers() {
				this.usersIsLoading_1_75 = !0, this.funcObserveAllUsers_1_75(), $(".BTN_GetListOfUserProfiles_1_75 > a").click()
			},
			funcObserveAllUsers_1_75() {
				$(".ETRAY_USER_PROFILE_RAW_JSON_1_75 > div").html("");
				let e = this;
				var t = new MutationObserver(function (s) {
					var a = $(".ETRAY_USER_PROFILE_RAW_JSON_1_75 > div").html();
					e.setUsers_1_75(a), e.usersIsLoading_1_75 = !1, t.disconnect(), e.usersIsLoading_76_150 = !0, e.funcObserveAllUsers_76_150(), $(".BTN_GetListOfUserProfiles_76_150 > a").click()
				});
				t.observe(document.querySelector(".ETRAY_USER_PROFILE_RAW_JSON_1_75 > div"), {
					characterData: !0,
					childList: !0
				})
			},
			funcObserveAllUsers_76_150() {
				$(".ETRAY_USER_PROFILE_RAW_JSON_76_150 > div").html("");
				let e = this;
				var t = new MutationObserver(function (s) {
					var a = $(".ETRAY_USER_PROFILE_RAW_JSON_76_150 > div").html();
					e.setUsers_76_150(a), e.usersIsLoading_76_150 = !1, t.disconnect(), e.usersIsLoading_151_225 = !0, e.funcObserveAllUsers_151_225(), $(".BTN_GetListOfUserProfiles_151_225 > a").click()
				});
				t.observe(document.querySelector(".ETRAY_USER_PROFILE_RAW_JSON_76_150 > div"), {
					characterData: !0,
					childList: !0
				})
			},
			funcObserveAllUsers_151_225() {
				$(".ETRAY_USER_PROFILE_RAW_JSON_151_225 > div").html("");
				let e = this;
				var t = new MutationObserver(function (s) {
					var a = $(".ETRAY_USER_PROFILE_RAW_JSON_151_225 > div").html();
					e.setUsers_151_225(a), e.usersIsLoading_151_225 = !1, t.disconnect(), e.usersIsLoading_226_300 = !0, e.funcObserveAllUsers_226_300(), $(".BTN_GetListOfUserProfiles_226_300 > a").click()
				});
				t.observe(document.querySelector(".ETRAY_USER_PROFILE_RAW_JSON_151_225 > div"), {
					characterData: !0,
					childList: !0
				})
			},
			funcObserveAllUsers_226_300() {
				$(".ETRAY_USER_PROFILE_RAW_JSON_226_300 > div").html("");
				let e = this;
				var t = new MutationObserver(function (s) {
					var a = $(".ETRAY_USER_PROFILE_RAW_JSON_226_300 > div").html();
					e.setUsers_226_300(a), e.usersIsLoading_226_300 = !1, t.disconnect(), e.usersIsLoading_301_375 = !0, e.funcObserveAllUsers_301_375(), $(".BTN_GetListOfUserProfiles_301_375 > a").click()
				});
				t.observe(document.querySelector(".ETRAY_USER_PROFILE_RAW_JSON_226_300 > div"), {
					characterData: !0,
					childList: !0
				})
			},
			funcObserveAllUsers_301_375() {
				$(".ETRAY_USER_PROFILE_RAW_JSON_301_375 > div").html("");
				let e = this;
				var t = new MutationObserver(function (s) {
					var a = $(".ETRAY_USER_PROFILE_RAW_JSON_301_375 > div").html();
					e.setUsers_301_375(a), e.usersIsLoading_301_375 = !1, t.disconnect(), e.usersIsLoading_376_450 = !0, e.funcObserveAllUsers_376_450(), $(".BTN_GetListOfUserProfiles_376_450 > a").click()
				});
				t.observe(document.querySelector(".ETRAY_USER_PROFILE_RAW_JSON_301_375 > div"), {
					characterData: !0,
					childList: !0
				})
			},
			funcObserveAllUsers_376_450() {
				$(".ETRAY_USER_PROFILE_RAW_JSON_376_450 > div").html("");
				let e = this;
				var t = new MutationObserver(function (s) {
					var a = $(".ETRAY_USER_PROFILE_RAW_JSON_376_450 > div").html();
					e.setUsers_376_450(a), e.usersIsLoading_376_450 = !1, t.disconnect(), e.usersIsLoading_451_525 = !0, e.funcObserveAllUsers_451_525(), $(".BTN_GetListOfUserProfiles_451_525 > a").click()
				});
				t.observe(document.querySelector(".ETRAY_USER_PROFILE_RAW_JSON_376_450 > div"), {
					characterData: !0,
					childList: !0
				})
			},
			funcObserveAllUsers_451_525() {
				$(".ETRAY_USER_PROFILE_RAW_JSON_451_525 > div").html("");
				let e = this;
				var t = new MutationObserver(function (s) {
					var a = $(".ETRAY_USER_PROFILE_RAW_JSON_451_525 > div").html();
					e.setUsers_451_525(a), e.usersIsLoading_451_525 = !1, t.disconnect()
				});
				t.observe(document.querySelector(".ETRAY_USER_PROFILE_RAW_JSON_451_525 > div"), {
					characterData: !0,
					childList: !0
				})
			},
			run_autoupdate_func() {
				this.isNewCaseLoading || this.isCaseUpdating || (clearJSONfields(), this.readLatestUpdatedCases()), this.isNewAnnouncementLoading || this.isUpdatedAnnouncementLoading || (clearJSONfields(), this.readLatestUpdatedDocsByOthers())
			},
			setUsers(e) {
				function t(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				e.length > 2 && JSON.parse(t(t(e))).forEach(e => {
					0 > this.users.findIndex(t => t.id == e.id) && this.users.push(e)
				})
			},
			setUsers_1_75(e) {
				function t(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				$(".ETRAY_USER_PROFILE_RAW_JSON_1_75 > div").html(""), e.length > 2 && JSON.parse(t(t(e))).forEach(e => {
					0 > this.users.findIndex(t => t.id == e.id) && this.users.push(e)
				})
			},
			setUsers_76_150(e) {
				function t(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				$(".ETRAY_USER_PROFILE_RAW_JSON_76_150 > div").html(""), e.length > 2 && JSON.parse(t(t(e))).forEach(e => {
					0 > this.users.findIndex(t => t.id == e.id) && this.users.push(e)
				})
			},
			setUsers_151_225(e) {
				function t(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				$(".ETRAY_USER_PROFILE_RAW_JSON_151_225 > div").html(""), e.length > 2 && JSON.parse(t(t(e))).forEach(e => {
					0 > this.users.findIndex(t => t.id == e.id) && this.users.push(e)
				})
			},
			setUsers_226_300(e) {
				function t(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				$(".ETRAY_USER_PROFILE_RAW_JSON_226_300 > div").html(""), e.length > 2 && JSON.parse(t(t(e))).forEach(e => {
					0 > this.users.findIndex(t => t.id == e.id) && this.users.push(e)
				})
			},
			setUsers_301_375(e) {
				function t(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				$(".ETRAY_USER_PROFILE_RAW_JSON_301_375 > div").html(""), e.length > 2 && JSON.parse(t(t(e))).forEach(e => {
					0 > this.users.findIndex(t => t.id == e.id) && this.users.push(e)
				})
			},
			setUsers_376_450(e) {
				function t(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				$(".ETRAY_USER_PROFILE_RAW_JSON_376_450 > div").html(""), e.length > 2 && JSON.parse(t(t(e))).forEach(e => {
					0 > this.users.findIndex(t => t.id == e.id) && this.users.push(e)
				})
			},
			setUsers_451_525(e) {
				function t(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				$(".ETRAY_USER_PROFILE_RAW_JSON_451_525 > div").html(""), e.length > 2 && JSON.parse(t(t(e))).forEach(e => {
					0 > this.users.findIndex(t => t.id == e.id) && this.users.push(e)
				})
			},
			readOpenDocs() {
				this.isOpenDocsLoading = !0, this.funcObserveDocsOpen(), $(".BTN_GetListOfExtDocs_Open > a").click()
			},
			readClosedDocs() {
				this.isClosedDocsLoading = !0, this.funcObserveDocsClosed(), $(".BTN_GetListOfExtDocs_Closed > a").click()
			},
			funcObserveDocsOpen() {
				$(".ETRAY_EXT_DOCS_RAW_JSON_OPEN > div").html("");
				let e = this;
				var t = new MutationObserver(function (s) {
					var a = document.querySelector(".ETRAY_EXT_DOCS_RAW_JSON_OPEN > div").innerHTML;
					e.setDocs(a), e.isOpenDocsLoading = !1, t.disconnect(), e.readClosedDocs()
				});
				t.observe(document.querySelector(".ETRAY_EXT_DOCS_RAW_JSON_OPEN > div"), {
					characterData: !0,
					childList: !0
				})
			},
			funcObserveDocsClosed() {
				$(".ETRAY_EXT_DOCS_RAW_JSON_CLOSED > div").html("");
				let self = this;
				var observer = new MutationObserver(function (mutations) {
					var html = document.querySelector(".ETRAY_EXT_DOCS_RAW_JSON_CLOSED > div").innerHTML;
					self.setDocs(html);
					self.isClosedDocsLoading = false;
					observer.disconnect();
				});
				observer.observe(document.querySelector(".ETRAY_EXT_DOCS_RAW_JSON_CLOSED > div"), {
					characterData: true,
					childList: true
				});
			},

			setDocs(html) {
				setDocPagePostIDs();
				if (html.length > 2) {
					var docs = JSON.parse(html);
					docs.forEach((doc, index) => {
						if (this.items.findIndex(item => item.onid == doc.onid) < 0) {
							this.items.push(doc);
						}
					});
				}
			},
			setSearchInOldCases() {
				this.isSearchingOldCases = !0, $(".ETRAY_JSON_LIST_OF_OLD_CASES > div").html(""), $(".SEARCH_FIELD > input").val(this.searchQuery), this.funcObserveSearchedServerCases(), $(".BTN_GetListOfOldCasesJSON > a").click()
			},
			funcObserveSearchedServerCases() {
				var e = this,
					t = new MutationObserver(function (s) {
						e.setServerCases(), e.isSearchingOldCases = !1, t.disconnect()
					});
				t.observe(document.querySelector(".ETRAY_JSON_LIST_OF_OLD_CASES > div"), {
					characterData: !0,
					childList: !0
				})
			},
			setServerCases() {
				var e = $(".ETRAY_JSON_LIST_OF_OLD_CASES > div").html();
				!(e.length < 3) && (this.encodeCases(e), $(".ETRAY_JSON_LIST_OF_OLD_CASES > div").html(""))
			},
			setSearchInParnerCases() {
				this.isSearchingPartnerCases = !0, $(".ETRAY_JSON_LIST_OF_OTHER_P_CASES > div").html(""), $(".SEARCH_FIELD > input").val(this.searchQuery), this.funcObservePartnerCases(), $(".BTN_GetListOfOtherPCasesJSON > a").click()
			},
			funcObservePartnerCases() {
				var e = this,
					t = new MutationObserver(function (s) {
						e.setPartnerCases(), e.isSearchingPartnerCases = !1, t.disconnect()
					});
				t.observe(document.querySelector(".ETRAY_JSON_LIST_OF_OTHER_P_CASES > div"), {
					characterData: !0,
					childList: !0
				})
			},
			setPartnerCases() {
				var e = $(".ETRAY_JSON_LIST_OF_OTHER_P_CASES > div").html();
				!(e.length < 3) && (this.encodeCases(e), $(".ETRAY_JSON_LIST_OF_OTHER_P_CASES > div").html(""))
			},
			readEndCustomerConfigs() {
				this.listenForDataChangesForONPKonfiguration("ONP_PENDING_PRODUCT_LIST")
				this.listenForDataChangesForONPKonfigurationForm('ONP_TRANSACTION_LIST')
				$(".ONP_BTN_GetInitialConfigData > a").click()
			},
			listenForDataChangesForONPKonfigurationForm(e, t, s) {
				$("." + e + " > div").html("data__loading");
				let interval = setInterval(() => {
					let s = $("." + e + " > div").html();
					if (s !== "data__loading") {
						clearInterval(interval);
						if (s.length > 1) {
							this.onpFormData = JSON.parse(s)
							this.setIsCreateOnpModalForm()
						}
					}
				}, 1500);
			},
			listenForDataChangesForONPKonfiguration(e, t, s) {
				this.isLoadingOnpProductList = true;
				$("." + e + " > div").html("data__loading");

				let interval = setInterval(() => {
					let s = $("." + e + " > div").html();
					if (s !== "data__loading") {
						clearInterval(interval);
						this.setEncodeData(s);
						this.isLoadingOnpProductList = false;
					}
				}, 1500);
			},
			setEncodeData(e) {
				function t(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				e.length > 2 && JSON.parse(t(t(e))).forEach(e => {
					let t = this.onpProductList.findIndex(t => t.REC_ID == e.REC_ID);
					t < 0 ? this.onpProductList.push(e) : this.onpProductList[t] = e
				})
			},
			listenForDataUpdates(e, t, s) {
				this.isUpdatingOnpProductList = !0, $("." + e + "> div").html("data__loading"), a && clearInterval(a);
				var a = setInterval(t => {
					var s = $("." + e + "> div").html();
					"data__loading" != s && (clearInterval(a), this.setEncodeData(s), this.isUpdatingOnpProductList = !1, this.closeVueModalOverlay())
				}, 1500)
			},
			setActiveOnpProductListFilter(e) {
				this.theActiveOnpProductListFilter = e
			},
			setIsCreateOnpModal(editItem) {
				this.setIsCreateOnpModalForm(editItem)
				this.isCreateOnpModal = true;
				this.isVueModalOverlay = true;
				$("body").css("overflow", "hidden");
			},
			setIsCreateOnpModalForm(editItem) {
				const values = [];
				this.onpFormData.forEach(standardFormItem => {
					let value = standardFormItem['from_company'];
					if (values.indexOf(value) < 0) {
						values.push(value);
					}
				});
				this.onpForm.forEach(formItem => {
					if (formItem.id === 'FROM_COMPANY') {
						formItem.options = values.sort();
					} else {
						this.$set(formItem, 'hide', true)
					}
				})
				if (editItem && editItem.REC_ID) {
					this.onpForm.forEach((formItem, s) => {
						formItem.value = editItem[formItem.id]
						this.setFormItemValidated(formItem)
					})
				}
			},
			submitOnpForm() {
				let hasError = false;

				this.onpForm.forEach((input, index) => {
					if (!input.hide && input.value.length < 1) {
						hasError = true;
						input.validated = false;
					}
				});

				if (!hasError) {
					let formData = {};

					this.onpForm.forEach((input, index) => {
						formData[input.id] = input.value;
					});
					$(".ONP_INPUT_CONFIG_JSON > input").val(JSON.stringify([formData]));
					this.listenForDataUpdates("ONP_UPDATED_PRODUCT_LIST");
					$(".ONP_BTN_SetConfigData > a").click();
				}
			},
			setTheEditOnp(editItem) {
				console.log('setEdit', editItem)
				this.setIsCreateOnpModal(editItem)
			},
			infinteScrollONPLoadMore() {
				if ("end_customer_pricing_config" === this.activeCategory) {
					if (this.onpProductListSearched.length < 50) {
						this.infiniteScrollNumberONP = 50;
						return
					} !(this.infiniteScrollNumberONP > this.onpProductListSearched.length) && (this.infiniteScrollNumberONP += 50)
				}
			},
			setTheActiveDescExpanded(e) {
				this.theActiveDescExpanded === e ? this.theActiveDescExpanded = null : this.theActiveDescExpanded = e
			},
			findPrices() {
				if (!this.validateSSID(this.ssid)) {
					this.$refs.ssid_input.focus();
					this.isSSIDValid = false;
					return;
				}
				this.listenForDataChangesOnp("ONP_SSID_DETAILS", this.OnpSSIDDetails, "isSSIDLoading");
				$(".ONP_INPUT_SSID > input").val(this.ssid);
				$(".ONP_BTN_GetSSIDDetails > a").click();
			},
			setNewOrderSkaderItems() {
				if (this.theNewOrderSkaderItems.length < 1) {
					this.addNewOrderSkadeItem()
				}
			},
			addNewOrderSkadeItem() {
				if (this.theNewOrderSkaderItems.length > 0) {
					const lastItemIdx = this.theNewOrderSkaderItems.length - 1
					if (this.theNewOrderSkaderItems[lastItemIdx]['LABEL'].length < 1) {
						const el = $('.o-cart__items > li:nth-last-child(2) > .o-input[type="text"]')
						el.removeClass('animate-shake')
						setTimeout(_ => {
							el.addClass('animate-shake')
						}, 250)
						el.focus()
						return
					}
				}
				const obj = {
					v_id: Date.now() + Math.random(),
					v_count: 1,
					TRANSACTION_CODE: '002',
					LABEL: '',
					PRICE: 0,
					QUANTITY: 1,
					UNIT_LABEL: '',
					SSID: this.ssid
				}
				this.theNewOrderSkaderItems.push(obj)
				this.$nextTick(_ => {
					$('.o-cart__items > li:nth-last-child(2) > .o-input[type="text"]').focus()
				})
			},
			deleteNewOrderSkadeItem(idx) {
				console.log('deleteNewOrderSkadeItem', idx)
				this.theNewOrderSkaderItems.splice(idx, 1)
			},
			validateSSID(e) {
				let t = !isNaN(e);
				return t && 10 === e.length
			},
			readEndCustomerOrders() {
				this.listenForDataChangesOnp("ONP_PENDING_ORDERS", this.onpPendingOrders, "isLoadingOnpPendingOrders"), $(".ONP_BTN_GetPendingOrders > a").click()
			},
			setSpinner(e, t) {
				"isLoadingOnpPendingOrders" === e && (this.isLoadingOnpPendingOrders = t), "isSSIDLoading" === e && (this.isSSIDLoading = t), "isSubmitOrderLoading" === e && (this.isSubmitOrderLoading = t), "isDeletingOrder" === e && (this.isDeletingOrder = t)
			},
			listenForDataChangesOnp(e, t, s) {
				var a = this;
				this.setSpinner(s, !0), $("." + e + "> div").html("data__loading"), i && clearInterval(i);
				var i = setInterval(r => {
					var o = $("." + e + "> div").html();
					if ("data__loading" != o) {
						if (clearInterval(i), "isDeletingOrder" === s) {
							this.setEncodeDataPendingOrders(o, t), this.setSpinner(s, !1), a.setCancelOrderConfirmation(!1), a.closeVueModalOverlay();
							return
						}
						if ("INVALID_SSID" == o) {
							this.isSSIDLoading = !1, this.isSSIDValid = !1;
							return
						}
						this.setEncodeDataPendingOrders(o, t), this.setSpinner(s, !1), "isSSIDLoading" === s && this.setIsNewOrderModal(!0), "isSubmitOrderLoading" === s && this.closeVueModalOverlay()
					}
				}, 1500)
			},
			setEncodeDataPendingOrders(e, t) {
				function s(e) {
					var t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				}
				e.length > 2 && JSON.parse(s(s(e))).forEach(e => {
					if (t == this.onpPendingOrders) var s = t.findIndex(t => t.id == e.id);
					else var s = t.findIndex(t => t.REC_ID == e.REC_ID);
					t == this.OnpSSIDDetails && this.$set(e, "v_count", 0), s < 0 ? t.push(e) : t[s] = e
				})
			},
			setIsNewOrderModal(e) {
				e && (this.isNewOrderModal = !0, this.isVueModalOverlay = !0, $("body").addClass("no-scroll"))
			},
			itemCountDecrement(e) {
				0 != e.v_count && e.v_count--
			},
			itemCountIncrement(e) {
				e.v_count++
			},
			validateOrderItem(e) {
				(!e.v_count || isNaN(1 * e.v_count) || e.v_count < 0) && (e.v_count = 0)
			},
			submitOrder() {
				console.log(this.dbOrder)
				const self = this;
				if (this.orderCustomerEmail.length === 0 && this.theActiveOrderType === '001') {
					this.$refs.order_customer_email_input.focus();
					clearTimeout(timeoutId);
					self.isCustomerEmailInputEmpty = true;

					var timeoutId = setTimeout(() => {
						self.isCustomerEmailInputEmpty = false;
					}, 1500);

					return;
				}
				const isValidEmail = this.theActiveOrderType === '001' ? this.validateEmail(this.orderCustomerEmail) : true
				if (isValidEmail) {
					document.querySelector(".ONP_INPUT_SSID_DETAILS > input").value = JSON.stringify(this.dbOrder);
					this.listenForDataChangesOnp("ONP_SSID_SubmitResult", this.onpPendingOrders, "isSubmitOrderLoading");
					document.querySelector(".ONP_BTN_SSID_SubmitDetails > a").click();
				} else {
					this.isOrderCustomerEmailValid = false;
				}
			},
			setActivePrevOrder(e) {
				this.theActivePrevOrder = e, this.isVueModalOverlay = !0, $("body").addClass("no-scroll")
			},
			setCancelOrderConfirmation(e) {
				e ? (this.isCancelOrderConfirmation = !0, this.isVueModalOverlayExtra = !0) : (this.isCancelOrderConfirmation = !1, this.isVueModalOverlayExtra = !1)
			},
			submitCancelOrder() {
				$(".ONP_INPUT_DELETE_ORDER > input").val(this.theActivePrevOrder.id), this.listenForDataChangesOnp("ONP_DELETE_ORDER__CONFIRMATION", this.onpPendingOrders, "isDeletingOrder"), $(".ONP_BTN_DELETE_ORDER > a").click()
			},
			removeOrderFromOrders() {
				var e = this.onpPendingOrders.findIndex(e => e.id == this.theActivePrevOrder.id);
				this.onpPendingOrders.splice(e, 1)
			},
			infinteScrollONPOrdersLoadMore() {
				if ("end_customer_orders" === this.activeCategory) {
					if (this.onpPendingOrdersSearched.length < 50) {
						this.infiniteScrollNumberONPOrders = 50;
						return
					} !(this.infiniteScrollNumberONPOrders > this.onpPendingOrdersSearched.length) && (this.infiniteScrollNumberONPOrders += 50)
				}
			},
			setIsEndCustomerEmailConfigModal(bool) {
				if (bool) {
					$("body").css("overflow", "hidden");
					//$('.OUTPUT_ONP_EndCustomerEmailConfigFORM > div').html('');
					//$('.BUTTON_ONP_EndCustomerEmailConfigFORM > a').click();
					this.isLoadingEndCustomerEmailConfigFormData = true
					// Clear the interval if it's already running
					if (a) {
						clearInterval(a);
					}

					// Poll for data loading status and encode data when it's done
					var a = setInterval(() => {
						var str = $('.OUTPUT_ONP_EndCustomerEmailConfigFORM > div').html()
						if (str.length > 4) {
							clearInterval(a);
							if (isJsonString(str)) {
								const formData = JSON.parse(str)
								formData.forEach(formInput => {
									const idx = this.theEndCustomerEmailConfigForm.findIndex(item => item.id === formInput.id)
									if (idx > -1) {
										this.theEndCustomerEmailConfigForm[idx].value = decodeURI(formInput.value)
									}
								})
							}
							this.isLoadingEndCustomerEmailConfigFormData = false
						}
					}, 1500);
				}

				function isJsonString(str) {
					try {
						JSON.parse(str)
					} catch (e) {
						return false
					}
					return true
				}
				this.isEndCustomerEmailConfigModal = bool
				this.isVueModalOverlay = bool
			},
			submitEndCustomerEmailConfigForm() {
				this.isUpdatingEndCustomerEmailConfigForm = true
				let formValue = this.theEndCustomerEmailConfigForm.map(item => {
					return { id: item.id, value: encodeURI(item.value) };
				});

				$('.INPUT_ONP_EndCustomerEmailConfigFORM > input').val(JSON.stringify(formValue))
				//console.log(JSON.stringify(formValue))
				$('.BUTTON_ONP_EndCustomerEmailConfigFORM > a').click()

				// Clear the interval if it's already running
				if (a) {
					clearInterval(a);
				}

				// Poll for data loading status and encode data when it's done
				var a = setInterval(() => {
					var s = $('.INPUT_ONP_EndCustomerEmailConfigFORM > input').val()
					if (s === "modtaget") {
						clearInterval(a);
						this.closeVueModalOverlay()
					}
				}, 1500);
			}
		},
		beforeMount() {
			if ("undefined" != typeof Storage) {
				var e = window.localStorage.getItem("sortSettingCases");
				e && (this.theSortSettingCases = JSON.parse(e));
				var t = window.localStorage.getItem("sortSettingDocs");
				t && (this.theSortSettingDocs = JSON.parse(t))
			}
		},
		mounted() {
			var e = this
			this.theActiveLoggedInCompany = $(".FROM_COMPANY > input").val()
			/* START 17-12-23 */
			this.$nextTick(_ => {
				t = window.location.href
				s = t.indexOf("&ID=");
				if (0 > t.indexOf("&ID=&GUID")) {
					var a = t.substring(s + 4, t.indexOf("&GUID="));
					this.setActivecCategory("all_cases")
					this.$refs.v_search_query.value = a
					this.searchQuery = a
				}
				const getQueryParams = (url) => {
					const urlObj = new URL(url);
					const params = new URLSearchParams(urlObj.search);
					const area = params.get('area');
					const tab = params.get('tab');
					return { area, tab }
				}
				const urlParams = getQueryParams(window.location)
				if (urlParams.area && urlParams.tab) {
					if (urlParams.area === 'openanalytics') {
						this.setActivecCategory('OpenAnalytics')
					}
					if (urlParams.tab === 'data') {
						this.setTheActiveFilter('OpenAnalytics_tab1')
					}
					if (urlParams.tab === 'datasubscriptions') {
						this.setTheActiveFilter('OpenAnalytics_tab2')
					}
					if (urlParams.tab === '1') {
						this.setTheActiveFilter('OpenAnalytics_tab1')
					}
					if (urlParams.tab === '2') {
						this.setTheActiveFilter('OpenAnalytics_tab2')
					}
					if (urlParams.tab === 'hentfiler') {
						this.setTheActiveFilter('OpenAnalytics_tab1')
					}



				}
				$(document).trigger("trigger::vue_mounted")
				const el = $('.updTagOrGroup_Output_mvp_groups > div')
				if (el && el.length > 0) {
					const arrOfPredifinedGroups = el.html() && el.html().length > 2 ? JSON.parse(el.html()) : [];
					const modifiedArrOfPredifinedGroups = arrOfPredifinedGroups.map(group => {
						return { ...group, v_sort: true };
					});
					this.thePredefinedGroups = modifiedArrOfPredifinedGroups;
				}
				this.getAllLocalStorageFilter()
			})
			/* END 17-12-23 */
			"OpenNet" == $(".FROM_COMPANY > input").val() && $(".LOGIN_CUSTOMER_TYPE > input").val("ON"), this.theUserType = $(".LOGIN_CUSTOMER_TYPE > input").val(), "ON" == this.theUserType && $(".INQUIRY_TYPE_LEVEL0 > select").html($(".INQUIRY_TYPE_LEVEL0 > select").html().replace("SP</option>", "Til Infrastructure owner (IO)</option>").replace("IO</option>", "Til Service Provider (SP)</option>")), "ON" == this.theUserType ? ($(".js-click-case-edit-ref").removeClass("hidden_field"), $(".toggle-timeline-read-msg").removeClass("hidden_field"), readTimelineReadMsgCookie()) : ($("#js-checkbox__toogle-timeline_read_msg").prop("checked", !0), readTimelineReadMsgCookie()), document.querySelector("#o-page").addEventListener("click", function (t) {
				e.onClickOutside(t)
			}), e.funcObserveThisUser(), $(".BTN_GetListOfUserProfilesUser > a").click(), e.readOpenCasesV2(e.open_startLength, e.open_endLength), e.readOpenDocs(), $(document).on("vue::BILoadingTrigger", function (t, s) {
				e.isLoadingBIReport = s
			}), $(document).on("vue::BIChangeTrigger", function (t, s) {
				e.theUnreadSelected = s
			}), $(document).on("vue::new_ext_case", function () {
				e.isNewAnnouncementLoading = !0, e.readLatestUpdatedDocs()
			}), $(document).on("vue::update_ext_case", function () {
				e.isUpdatedAnnouncementLoading = !0, e.readLatestUpdatedDocs()
			}), $(document).on("vue::new_user", function () {
				e.isNewUserLoading = !0, e.funcObserveLatestUser()
			}), document.addEventListener("username_init_error", () => {
				Vue.set(e.formErrors, "user_init", "Brugernavn er allerede taget")
			}), document.addEventListener("username_init_no_error", () => {
				e.removeErrors("user_init")
			}), $(document).on("vue::new_case_created", function () {
				e.isNewCaseLoading = !0, e.readLatestUpdatedCases()
			}), $(document).on("vue::close_cases_modal", function () {
				Object.keys(e.theActiveCaseUpdatedParams).length && (e.isCaseUpdating = !0, e.readLatestUpdatedCases(), e.theActiveCaseUpdatedParams = {}), e.run_autoupdate_func()
			}), $(document).on("vue::update_case_prop", function (t, s, a) {
				if (e.theCaseUpdatingId = s, a)
					for (var i in a) e.theOrignalActiveCase[i] != a[i] ? Vue.set(e.theActiveCaseUpdatedParams, i, a[i]) : e.theActiveCaseUpdatedParams.hasOwnProperty(i) && delete e.theActiveCaseUpdatedParams[i]
			}), this.$nextTick(t => {
				$(window).on("scroll", function () {
					var t = $(document).height(),
						s = $(window).height() + $(window).scrollTop();
					(t - 300 >= s) / t == 0 && (e.loadMoreCases(), e.infinteScrollONPLoadMore(), e.infinteScrollONPOrdersLoadMore())
				})
			}), setInterval(t => {
				run_autoupdate && "roles" != this.activeCategory && e.run_autoupdate_func()
			}, 3e4)
		}
	})
}), $(window).scroll(function (e) {
	var t = $(".o-header");
	window.scrollY > 32 ? t.hasClass("o-header--fixed") || t.addClass("o-header--fixed") : t.removeClass("o-header--fixed")
});
// TRIGGER VUE_LOADED - END //

// STEP 4 - TRIGGER VUE_MOUNTED - START //
$(document).on("trigger::vue_mounted", function () {
	//console.log("trigger::vue_mounted");

	mediaQuery.matches && openBurgerMenu();

	$("#webform").appendTo(".js-form-create-case");
	addEtrayCreateFormEventListeners();

	// Bind click event for menu toggle
	$(".js-menu-toggle").off("click").on("click", function () {
		$(this).hasClass("active") ? closeBurgerMenu() : openBurgerMenu();
	});
	// Bind click event for case creation button
	$(".js-btn-create-case").off("click").on("click", function () {

		run_autoupdate = false;
		window.scroll(0, 0);
		subCatChangeSelect("Create Case");

		if (window.matchMedia("(max-width: 600px)").matches) {
			closeBurgerMenu();
		}

		if ($(this).hasClass("active")) {
			closeCreateCase();
		} else {
			$(this).addClass("active");
			$(".o-bg-overlay").addClass("o-bg-overlay--active");
			$(".js-o-modal__create-case").addClass("o-create-case--active");
			$("body").css("overflow", "hidden");
			$(".js-modal-create-title").text("Opret sag");
		}

		// Set "forespørgstyper" based on filters
		console.log('js-btn-create-case::clicked', requestTypeFilter)
		var visibleElements = $('.INQUIRY_TYPE_LEVEL2').filter(function () {
			return $(this).css('display') !== 'none';
		});
		$(visibleElements).find('.Web_InnerControl_CATEGORY').val("").change();
		$(visibleElements).find('.Web_InnerControl_CATEGORY option').each(function () {
			const optionText = $(this).text();
			if (requestTypeFilter !== null && requestTypeFilter.length > 0 && !requestTypeFilter.includes(optionText)) {
				$(this).hide();
			} else {
				$(this).show();
			}
		});
	});

	// Bind click event for menu overlay
	$(".js-o-menu__overlay").off("click").on("click", function () {
		$(".js-menu-toggle").removeClass("active");
		$(".o-menu__items").removeClass("o-menu__items--active");
		$(".o-menu__overlay").removeClass("o-menu__overlay--active");
	});

	// Bind click event for home navigation
	$(".js-click-nav__home").off("click").on("click", function () {
		$(".o-page").removeClass("o-page--docs");
		$(".o-page").removeClass("o-page--all-cases");
		$(".o-menu__items__inner li").each(function () {
			$(this).removeClass("li--active");
		});
		$(this).addClass("li--active");
		$(".js-page-title").text("Hjem / Mine sager");
		$(".ETRAY_LIST_VIEWER_CASES_LEVEL_1 > input").val("");
		$(".ETRAY_LIST_VIEWER_CASES_LEVEL_2 > input").val("");
		$(".js-filter-level2__new_announcements").css("display", "");
		showSpecificLevel3Filters([
			".js-filter__sla",
			".js-filter__created_by_me",
			".js-filter__assigned_to_me",
			".js-filter__follows"
		]);
		resetLevel2FiltersToInitialState();
		if (window.matchMedia("(max-width: 600px)").matches) {
			closeBurgerMenu();
		}
		window.scroll(0, 0);
	});

	// Bind click event for all cases navigation
	$(".js-click-nav__all-cases").off("click").on("click", function () {
		$(".o-page").removeClass("o-page--docs");
		if (!$(".o-page").hasClass("o-page--all-cases")) {
			$(".o-page").addClass("o-page--all-cases");
		}
		$(".o-menu__items__inner li").each(function () {
			$(this).removeClass("li--active");
		});
		$(this).addClass("li--active");
		$(".js-page-title").text("Alle sager");
		$(".ETRAY_LIST_VIEWER_CASES_LEVEL_1 > input").val("all");
		$(".js-filter-level2__new_announcements").css("display", "none");
		showSpecificLevel3Filters([
			".js-filter__sla",
			".js-filter__new",
			".js-filter__not_assigned",
			".js-filter__follow-up",
			".js-filter__assigned_to"
		]);
		resetLevel2FiltersToInitialState();
		if (window.matchMedia("(max-width: 600px)").matches) {
			closeBurgerMenu();
		}
		window.scroll(0, 0);
	});
});
// TRIGGER VUE_MOUNTED - END //

// STEP 5 - TRIGGER TRIGGER_AFTER_EXT_DOC_RENDERRING - START //
$(document).on("TRIGGER_AFTER_EXT_DOC_RENDERRING", function () {
	setTimeout(function () {
		$(".EXT_DOCS_TYPE option").filter(function () {
			return $(this).text() == $(".EXT_DOCS_TYPE_VAL > input").val()
		}).prop("selected", !0), $(".UPDATE_EXT_FIELDS").removeClass("hidden_field"), $(".EXT_DOCS_LOADING").addClass("hidden_field");
		var e = $(".EXT_RECIEVERS_JSON_UPDATE > div").html();
		createTogglerForReceivers(e, document.querySelector(".EXT_DOCS_RECIEVERS_DISPLAY_UPDATE > div"))
	}, 2e3)
})
// TRIGGER TRIGGER_AFTER_EXT_DOC_RENDERRING - END //

// Variables - START //

var observerAllCases, singleCaseLoadedObserver, mediaQuery = window.matchMedia("(min-width: 1000px)");
var offset = 250;
var duration = 550;
var report = null;
var run_autoupdate = !1;
var $form = $(".js-case-drop-files");
var droppedFiles = !1;
var Set_UM_USER_INIT = !0;
var openAnalyticsSecret = 'your_secret_value_here_global';
var current_iframeHeight = 10;
var current_iframeWidth = 10;
var isPurifyLoadedToPage = false
var isQuillLoadedToPage = false
var requestTypeFilter = null
console.log(openAnalyticsSecret)
// Variables - START //

// FUNCTIONS - START //

function setDocPagePostIDs() {
	$(".BTN_SetDocPagePostIDs_Step1 > a").click();
	setTimeout(() => {
		$(".BTN_SetDocPagePostIDs_Step2 > a").click();
	}, 2000); // 2000 milliseconds = 2 seconds
}

function openBurgerMenu() {
	// If the page does not have the 'o-page--menu-open' class, add it
	if (!$(".o-page").hasClass("o-page--menu-open")) {
		$(".o-page").addClass("o-page--menu-open");
	}

	// If the menu toggle does not have the 'active' class, add it
	//console.log('js-menu-toggle',$(".js-menu-toggle"));	
	if (!$(".js-menu-toggle").hasClass("active")) {
		$(".js-menu-toggle").addClass("active");
	}

	// If the menu items do not have the 'o-menu__items--active' class, add it
	if (!$(".o-menu__items").hasClass("o-menu__items--active")) {
		$(".o-menu__items").addClass("o-menu__items--active");
	}

	// If the menu overlay does not have the 'o-menu__overlay--active' class, add it
	if (!$(".o-menu__overlay").hasClass("o-menu__overlay--active")) {
		$(".o-menu__overlay").addClass("o-menu__overlay--active");
	}
}


addQuillFromCDN();
function addQuillFromCDN() {
	if (isQuillLoadedToPage) {
		return
	}
	const quillCss = document.createElement('link');
	quillCss.rel = 'stylesheet';
	quillCss.href = quillCssUrl;
	document.head.appendChild(quillCss);

	const quillScript = document.createElement('script');
	quillScript.src = quillJsUrl;
	quillScript.onload = function () {
		console.log('quill is here')
		$(document).trigger('quill::loaded');
		isQuillLoadedToPage = true
	};
	document.body.appendChild(quillScript);
}

function addPurifyFromCDN() {
	if (isPurifyLoadedToPage) {
		return
	}
	// Sanitizing user-generated content is crucial for preventing XSS (Cross-Site Scripting) attacks
	$.getScript(purifyJsUrl, function (e, t, s) {
		console.log('purify loaded')
		isPurifyLoadedToPage = true
	})
}

/* START 17-12-23 */
addPopperFromCDN()

function addPopperFromCDN() {
	// Create a <link> element for the CSS file
	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = virtualScrollCssUrl
	document.head.appendChild(link)

	// Create a <script> element for the Vue Multiselect script
	$.getScript(popperJsUrl, function (e, t, s) {
		console.log('popper loaded')
		$(document).trigger("trigger::vue__virtual_scroller_loaded")
	})
}
/* END 17-12-23 */
function closeBurgerMenu() {
	$(".js-menu-toggle").removeClass("active"), $(".o-page").removeClass("o-page--menu-open"), $(".o-menu__items").removeClass("o-menu__items--active"), $(".o-menu__overlay").removeClass("o-menu__overlay--active")
}

function closeCreateCase() {
	run_autoupdate = !0, $(".js-btn-create-case").removeClass("active"), $(".o-create-case").removeClass("o-create-case--active"), $("body").css("overflow", "initial"), $(".o-bg-overlay").removeClass("o-bg-overlay--active")
}

function addEtrayCreateFormEventListeners() {
	$('.Web_InnerControl_RADIOBUTTONS > div > input[type="radio"] + div').click(function () {
		$(this).prev('input[type="radio"]').click()
	}), $('.Web_MainControl_checkbox > input[type="checkbox"] + .CheckboxLabel').click(function () {
		$(this).prev('input[type="checkbox"]').click()
	})
}

function CreateUser() {
	!0 == submit_validation_logic() && (subCatChangeSelect("Create User"), $(".UM_EVENT_TYPE > input").val("CREATE_USER"), "" != $(".UM_COPY_OF > select").val() && $(".UM_USER_ID > input").val($(".UM_COPY_OF > select").val()), clearJSONfields(), $(".UM_RESULT > div").html(""), $(document).trigger("vue::new_user"), $(".BTN_UserManagement > a").click(), clear_fields_after_submit(), closeCreateCase())
}

function CreateExtCase() {
	!0 == submit_validation_logic() && (subCatChangeSelect("Create ext docs"), clearJSONfields(), $(".EXT_DOCS_PAGE_IDS > input").val(""), $(".EXT_DOCS_EVENT_TYPE > input").val("NEW"), $(".webformCreateMore").click(), clear_fields_after_submit(), closeCreateCase(), setTimeout(function () {
		$(document).trigger("vue::new_ext_case")
	}, 500))
}

function RemoveExtDocfile(e) {
	var t = $(".EXT_DOCS_PAGE_IDS > input").val();
	"-1" == $(".EXT_DOCS_PAGE_IDS > input").val().indexOf(e + ";", 0) && ($(".EXT_DOCS_PAGE_IDS > input").val(t + e + ";"), $(".remove_file_" + e).addClass("hidden_field"))
}

function UpdateExtCase(e) {
	!0 == submit_validation_logic() && (subCatChangeSelect("Edit ext docs"), "CLOSE" == e && $(".EXT_DOCS_EVENT_TYPE > input").val("CANCEL"), "EDIT" == e && $(".EXT_DOCS_EVENT_TYPE > input").val("UPDATE"), $(".webformCreateMore").click(), clear_fields_after_submit(), closeCreateCase(), setTimeout(function () {
		$(document).trigger("vue::update_ext_case")
	}, 500))
}

function CreateCaseAndClose() {
	// Set input value to true
	$(".CLOSE_ON_CREATE > input").val('true');
	$(".FROM_COMPANY_STATUS > input").val('Closed');
	console.log("FROM_COMPANY_STATUS", $(".FROM_COMPANY_STATUS > input").val());


	// If validation logic returns true, execute the following logic
	if (submit_validation_logic()) {
		subCatChangeSelect("Create Case");
		clearJSONfields();
		$(".webformCreateMore").click();
		clear_fields_after_submit();
		closeCreateCase();

		// Trigger an event after a short delay
		setTimeout(function () {
			$(document).trigger("vue::new_case_created");
		}, 1000);
	}
}

function CreateCase() {
	!0 == submit_validation_logic() && (subCatChangeSelect("Create Case"), clearJSONfields(), $(".webformCreateMore").click(), clear_fields_after_submit(), closeCreateCase(), setTimeout(function () {
		$(document).trigger("vue::new_case_created")
	}, 1e3))
}

function clear_fields_after_submit() {
	$(".js-clear_on_submit > textarea").val(""), $(".js-clear_on_submit > input").val(""), $(".js-clear_on_submit > div > div > :radio").prop("checked", !1), $(".js-clear_on_submit > select").prop("selectedIndex", 0), $(".INQUIRY_TYPE_LEVEL2 > select").change(), setTimeout(function () {
		$(".Web_MainControl_upload > .UploadPanel > div > a").click()
	}, 3e3)
}

function submit_validation_logic() {
	clearJSONfields();
	var e = 0;
	return $(".Web_MainControl").each(function () {
		if ("none" !== $(this).css("display")) {
			if ($(".NEW_PASSWORD_YES_NO  > .Web_InnerControl > div > input:checked").val() && $(".NEW_PASSWORD > input").val() != $(".NEW_PASSWORD2 > input").val() ? ($(".NEW_PASSWORD > input").addClass("js-input--error"), $(".NEW_PASSWORD2 > input").addClass("js-input--error"), e++) : ($(".NEW_PASSWORD > input").removeClass("js-input--error"), $(".NEW_PASSWORD2 > input").removeClass("js-input--error")), $(".USER_ADMIN_NEW_PASSWORD_YES_NO  > .Web_InnerControl > div > input:checked").val() && $(".USER_ADMIN_NEW_PASSWORD > input").val() != $(".USER_ADMIN_NEW_PASSWORD2 > input").val() ? ($(".USER_ADMIN_NEW_PASSWORD > input").addClass("js-input--error"), $(".USER_ADMIN_NEW_PASSWORD2 > input").addClass("js-input--error"), e++) : ($(".USER_ADMIN_NEW_PASSWORD > input").removeClass("js-input--error"), $(".USER_ADMIN_NEW_PASSWORD2 > input").removeClass("js-input--error")), $(this).find(".Web_Error").length) {
				var t = $(this).find(".Web_Error");
				"" != t.html() ? (e++, $(this).addClass("js-input--error")) : $(this).removeClass("js-input--error")
			}
			if ($(this).find(".Web_Required + a").length) {
				var t = $(this).find(".Web_Required + a");
				t.next("div").next(".UploadPanel").html().length < 1 ? (e++, $(this).addClass("js-input--error")) : $(this).removeClass("js-input--error")
			}
			if ($(this).find('.Web_Required + input[type="checkbox"]').length) {
				var t = $(this).find('.Web_Required + input[type="checkbox"]');
				$(t).is(":checked") ? $(this).removeClass("js-input--error") : (e++, $(this).addClass("js-input--error"))
			}
			if ($(this).find(".Web_Required + .Web_InnerControl > div > input").length) {
				var t = $(this).find(".Web_Required + .Web_InnerControl > div > input");
				$(t).is(":checked") ? $(this).removeClass("js-input--error") : (e++, $(this).addClass("js-input--error"))
			}
			if ($(this).find(".Web_Required + input").length) {
				var t = $(this).find(".Web_Required + input");
				$(t).val() ? $(t).val() && $(t).removeClass("js-input--error") : (e++, $(t).addClass("js-input--error"))
			}
			if ($(this).find(".Web_Required + textarea").length) {
				var t = $(this).find(".Web_Required + textarea");
				$(t).val() ? $(t).val() && $(t).removeClass("js-input--error") : (e++, $(t).addClass("js-input--error"))
			}
			if ($(this).find(".Web_Required + select").length) {
				var t = $(this).find(".Web_Required + select");
				$(t).val() ? $(t).val() && $(t).removeClass("js-input--error") : (e++, $(t).addClass("js-input--error"))
			}
		}
	}), !(e > 0) || (console.log(e), !1)
}

function setProgressPath() {
	// Get the progress indicator path and its total length
	var progressPath = document.querySelector(".progress_indicator path");
	if (!progressPath) {
		return
	}
	var pathLength = progressPath.getTotalLength();

	// Set initial styles for the progress indicator path
	progressPath.style.transition = progressPath.style.WebkitTransition = "none";
	progressPath.style.strokeDasharray = pathLength + " " + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();

	// Animate the progress indicator path when scrolling
	progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
	var updateProgress = function () {
		// Get the current scroll position and document height
		var scrollTop = $(window).scrollTop();
		var documentHeight = $(document).height() - $(window).height();

		// Update the stroke dash offset of the progress indicator path
		progressPath.style.strokeDashoffset = pathLength - scrollTop * pathLength / documentHeight;
	};

	// Call the updateProgress function on page load and when scrolling
	updateProgress();
	$(window).on("scroll", updateProgress);
}

function showSpecificLevel3Filters(e) {
	$(".js-filter-level3").each(function () {
		$(this).css("display", "none")
	}), $(".js-filter__assigned_to").css("display", "none"), removeActiveFiltersLevel3();
	for (var t = 0; t < e.length; t++) $(e[t]).css("display", "")
}

function resetLevel2FiltersToInitialState() {
	$(".js-filter-level2").each(function () {
		$(this).removeClass("o-filters__filter--active")
	}), $(".js-filter__open-cases").addClass("o-filters__filter--active"), $(".ETRAY_LIST_VIEWER_CASES_LEVEL_2 > input").val("")
}

function removeActiveFiltersLevel3() {
	$(".ETRAY_LIST_VIEWER_CASES_LEVEL_3 > input").val(""), $(".ETRAY_LIST_VIEWER_CASES_LEVEL_4 > input").val(""), $(".ETRAY_LIST_VIEWER_CASES_LEVEL_5 > input").val(""), $(".js-filter-level3").each(function () {
		$(this).removeClass("o-btn__filter---active")
	}), $(".o-body__list-of-cases .js-filter__categories.js-o-dropdown").removeClass("o-dropdown--has-selection"), $(".o-body__list-of-cases .js-filter__categories.js-o-dropdown").find(".o-dropdown__selected p").text("Alle kategorier"), $(".o-body__list-of-cases .js-o-dropdown").find(".o-dropdown__selected p").attr("id", ""), $(".o-body__list-of-cases .js-filter__assigned_to.js-o-dropdown").removeClass("o-dropdown--has-selection"), $(".o-body__list-of-cases .js-filter__assigned_to.js-o-dropdown").find(".o-dropdown__selected p").text("Alle brugere"), $(".o-body__list-of-cases .js-filter__assigned_to.js-o-dropdown").find(".o-dropdown__selected p").attr("id", "")
}

function readAllNotifications() { }

function readNotification(e) {
	var t = $(".ETRAY_NOTIFICATIONS__" + e + " > input").val();
	$(".js-filter__" + e + "> .js-filter__notifications").text(t), (!t || t < 1) && $(".js-filter__" + e + "> .js-filter__notifications").hide()
}

function readAllNumberOfCases() { }

function observeInputValue(e, t, s, a = 0) {
	let i = Object.getPrototypeOf(e);
	if (i.hasOwnProperty(t)) {
		let r = Object.getOwnPropertyDescriptor(i, t);
		Object.defineProperty(e, t, {
			get: function () {
				return r.get.apply(this, arguments)
			},
			set: function () {
				let e = this[t];
				r.set.apply(this, arguments);
				let i = this[t];
				return "function" == typeof s && setTimeout(s.bind(this, e, i), a), i
			}
		})
	}
}

function addEventListenerOnSingleCases() { }

// START ADDED 26-11-23 For openByOtherEmp
var isSeeCaseOpenByOthers = false
var intervalSeeCaseOpenByOthersTimer = null
var intervalObserveCaseOpenChanges = null
// END ADDED 26-11-23 For openByOtherEmp

function closeCasesModal() {
	run_autoupdate = true;
	$(".o-bg-overlay").removeClass("o-bg-overlay--active");
	$(".o-modal__case").removeClass("o-modal--active");
	$("#js-case-element__inserted").remove();
	$("body").css("overflow", "");
	if (!$('.js-modal__single-case .o-modal__body').hasClass('o-modal__body--loading')) {
		$('.js-modal__single-case .o-modal__body').addClass('o-modal__body--loading');
	}
	$(document).trigger("vue::close_cases_modal");
	// START ADDED 26-11-23 For openByOtherEmp
	$('.updCaseIdSession_Type > input').val('REMOVE')
	$('.updCaseIdSession_BTN > a').click()
	isSeeCaseOpenByOthers = false
	clearInterval(intervalSeeCaseOpenByOthersTimer)
	clearInterval(intervalObserveCaseOpenChanges)
	// END ADDED 26-11-23 For openByOtherEmp
}

function readEtrayCase(e, t) {
	$(".ETRAY_READ_CASE_TOKEN_ID > input").val(e), $(".ETRAY_READ_CASE_ID > input").val(t), clearJSONfields(), $(".ETRAY_READ_CASE > a").click(), readEtrayCaseComments()
}

function disable_all_btns() {
	$(".o-btn").css("pointer-events", "none"), $(".o-btn").css("cursor", "wait"), document.body.style.cursor = "wait"
}

function enable_all_btns() {
	$(".o-btn").css("pointer-events", ""), $(".o-btn").css("cursor", ""), document.body.style.cursor = ""
}

function readEtrayCaseComments() {
	$(".o-modal__case__timeline").hasClass("o-modal__case__timeline--loading") || $(".o-modal__case__timeline").addClass("o-modal__case__timeline--loading"), $(document).one("etray::single-case-comments-loaded", function () {
		$(".js-o-modal__case__timeline").html("");
		var e = '<div class="timeline_body">' + $(".ETRAY_CASE_TIMELINE_PARRENT > div > .ETRAY_CASE_TIMELINE").text() + "</div>";
		$(".ETRAY_CASE_TIMELINE_PARRENT > div > .ETRAY_CASE_TIMELINE").html(e), $(".js-o-modal__case__timeline").prepend($(".ETRAY_CASE_TIMELINE_PARRENT > div").html()), $(".o-modal__case__timeline").removeClass("o-modal__case__timeline--loading"), enable_all_btns()
	})
}

function readEtrayCaseComments() {
	// Check if the timeline is currently loading, if not, add the loading class
	if (!$(".o-modal__case__timeline").hasClass("o-modal__case__timeline--loading")) {
		$(".o-modal__case__timeline").addClass("o-modal__case__timeline--loading");
	}

	// Set up a one-time event listener for when the single case comments are loaded
	$(document).one("etray::single-case-comments-loaded", function () {
		// Clear the existing timeline content
		$(".js-o-modal__case__timeline").html("");

		// Construct the new timeline body with content from ETRAY_CASE_TIMELINE
		var timelineContent = '<div class="timeline_body">' +
			$(".ETRAY_CASE_TIMELINE_PARRENT > div > .ETRAY_CASE_TIMELINE").text() +
			"</div>";

		// Update the ETRAY_CASE_TIMELINE with the new content
		$(".ETRAY_CASE_TIMELINE_PARRENT > div > .ETRAY_CASE_TIMELINE").html(timelineContent);

		// Prepend the new timeline content to the modal
		$(".js-o-modal__case__timeline").prepend($(".ETRAY_CASE_TIMELINE_PARRENT > div").html());

		// Remove the loading class from the timeline
		$(".o-modal__case__timeline").removeClass("o-modal__case__timeline--loading");

		// Re-enable all buttons
		enable_all_btns();
	});
}




function addMutationObserverOnCommentFiles() {
	var e = new MutationObserver(function (t) {
		var s = "";
		$(".ETRAY_COMMENT_UPLOAD #uploadedPanel > div").each(function () {
			var e = $(this).find("span").text(),
				t = $(this).find("a").attr("deleteurl");
			s = s + ('<div class="cloned-uploads__file"><span>' + e + '</span><a style="margin-left:5px;cursor:pointer" class="link-text js-file-remove-link" data-id="') + t + '">Fjern</a></div>'
		});
		var a = '<div class="cloned-uploads">' + s + "</div>";
		$(".js-case__comment-files-listed").html(a), addClickEventListenersOnCommentFileUploads(), e.disconnect()
	});
	e.observe($(".ETRAY_COMMENT_UPLOAD #uploadedPanel")[0], {
		characterData: !0,
		childList: !0
	})
}

function addClickEventListenersOnCommentFileUploads() {
	$(".js-file-remove-link").off("click"), addMutationObserverOnCommentFiles(), $(".js-file-remove-link").click(function (e) {
		e.preventDefault();
		var t = $(this).attr("data-id");
		$("a[deleteurl='" + t + "']").click()
	})
}

function handleFiles(e) {
	[...e].forEach(uploadFile)
}

function uploadFile() { }

function openSmallModal(e) {
	var t = $("." + e);
	$(t).hasClass("o-modal--small--active") || ($(t).addClass("o-modal--small--active"), $(t).find(".js-o-modal-small__inner").css("display", "block")), $(".o-bg-small-modal-overlay").hasClass("o-bg-small-modal-overlay--active") || $(".o-bg-small-modal-overlay").addClass("o-bg-small-modal-overlay--active")
}

function closeSmallModal() {
	$(".o-modal--small").removeClass("o-modal--small--active"), $(".o-bg-small-modal-overlay").removeClass("o-bg-small-modal-overlay--active"), $(".o-modal--small").find(".js-o-modal-small__inner").css("display", "block"), $(".datetimepicker").val("")
}

function oSelectPreselect(e, t) {
	var s = $("." + e + " .o-select__dropdown ul").find("#" + t).text();
	$("." + e).find(".o-select__container").find(".js-o-select-selected-item-name").text(s), $("." + e).find(".o-select__container").find(".js-o-select-selected-item-id").val(t);
	var a = $("." + e).find(".o-select");
	a.hasClass("o-select--item-selected") || a.addClass("o-select--item-selected")
}

function resetOSelectPreSelected(e) {
	$("." + e).find(".o-select__container").find(".js-o-select-selected-item-name").text(""), $("." + e).find(".o-select__container").find(".js-o-select-selected-item-id").val(""), $("." + e).find(".o-select").removeClass("o-select--item-selected")
}

function oSelect() {
	$(".js-o-select-input-lookalike").on("click", function (e) {
		var t = $(this).closest(".o-select");
		t.hasClass("o-select--active") || t.addClass("o-select--active"), $(this).children('input[type="search"]').focus(), e.stopPropagation()
	}), $(".o-modal--small").on("click", function () {
		$(".o-select").removeClass("o-select--active"), $('input[type="search"]').blur(), closeOSelect()
	}), $(".o-select__dropdown ul li").on("click", function () {
		$(this).closest(".o-select__dropdown").prev(".o-select__container").find(".js-o-select-selected-item-name").text($(this).text()), $(this).closest(".o-select__dropdown").prev(".o-select__container").find(".js-o-select-selected-item-id").val($(this).attr("id"));
		var e = $(this).closest(".o-select");
		e.hasClass("o-select--item-selected") || e.addClass("o-select--item-selected"), closeOSelect()
	}), $(".o-search-input").on("input", function () {
		var e = $(this).closest(".o-select");
		e.hasClass("o-select--active") || e.addClass("o-select--active"), $(this).val().length > 0 ? e.hasClass("o-select--searchable") || e.addClass("o-select--searchable") : e.removeClass("o-select--searchable")
	}), $(".o-select__input").on("keyup", function () {
		var e = $(this).val().toUpperCase();
		$(this).closest(".o-select__container").siblings(".o-select__dropdown").children(".js-o-select-items").children("li").each(function () {
			$(this).text().toUpperCase().indexOf(e) > -1 ? $(this).show() : $(this).hide()
		})
	}), $(".js-o-select-search-clear").on("click", function () {
		$(".o-search-input").val(""), $(this).siblings(".js-o-select-selected-item-name").text(""), $(this).siblings(".js-o-select-selected-item-id").val(""), $(this).closest(".o-select").removeClass("o-select--item-selected")
	})
}

function closeOSelect() {
	$(".o-select--active").removeClass("o-select--active"), $(".o-select").removeClass("o-select--searchable"), $(".o-search-input").val(""), $(".o-search-input").blur(), $(".o-items > li").each(function () {
		$(this).css("display", "")
	})
}

function setDateTimePicker() {
	$(".datetimepicker").datetimepicker("destroy"), $(".datetimepicker").datetimepicker({
		onGenerate: function (e) {
			jQuery(this).find(".xdsoft_date.xdsoft_day_of_week6").addClass("xdsoft_disabled"), jQuery(this).find(".xdsoft_date.xdsoft_day_of_week0").addClass("xdsoft_disabled"), $(".datetimepicker").show()
		},
		lang: "da",
		dayOfWeekStart: 1,
		minDate: 0,
		inline: !0,
		timepicker: !0,
		scrollMonth: !1,
		scrollInput: !1,
		format: "d-m-Y H:i:s",
		defaultTime: "12:00",
		defaultDate: new Date,
		closeOnDateSelect: !0,
		onChangeDateTime: function (e, t) { }
	})
}

function appendEtrayCases() {
	$(".ETRAY_LIST_OF_CASES").css("display", ""), $(".ETRAY_LIST_OF_CASES").appendTo(".js-list-of-cases"), addEventListenerOnSingleCases()
}

function subCatChangeSelect(e) {
	$(".sub_cat option").filter(function () {
		return $(this).text() == e
	}).prop("selected", !0), $(".sub_cat > select").trigger("change")
}

function createTogglerForReceivers(e, t) {
	$(".d-receivers").length > 0 && $(".d-receivers").remove();
	var s = [];
	e.length > 3 && (s = JSON.parse(e));
	var a = {};
	s.forEach(e => {
		a[e.TYPE_OF_RECIEVER] ? a[e.TYPE_OF_RECIEVER].push(e) : a[e.TYPE_OF_RECIEVER] = [e]
	});
	var i = document.createElement("div");
	i.classList.add("d-receivers");
	var r = [];
	for (let o in a) {
		var n = "o-toggle o-toggle--activated",
			l = document.createElement("div");
		l.classList.add("d-receivers__type");
		var d = document.createElement("div");
		d.classList.add("d-receivers__type__receivers"), a[o].forEach(e => {
			var t = "o-toggle";
			"true" == e.SELECTED ? (r.push(e.VALUE), t = "o-toggle o-toggle--activated") : n = "o-toggle";
			var s = '<div class="' + t + '" data-receiver-id="' + e.VALUE + '" data-receiver-type="' + e.TYPE_OF_RECIEVER + '"></div>';
			d.innerHTML += '<div class="d-receivers__receiver" data-receiver-id="' + e.VALUE + '" data-receiver-type="' + e.TYPE_OF_RECIEVER + '">' + e.DISPLAY_NAME + " " + s + "</div>"
		}), l.innerHTML += '<div class="d-receivers__header js-d-receivers__header" data-master-type="' + o + '"><div class="' + n + '" data-master-type="' + o + '"></div><h4>' + o + "</h4></div>", l.appendChild(d), i.appendChild(l)
	}

	function c(e) {
		var t = $(e).data("receiver-id"),
			s = r.indexOf(t);
		$(".o-toggle[data-receiver-id='" + t + "']").hasClass("o-toggle--activated") ? ($(".o-toggle[data-receiver-id='" + t + "']").removeClass("o-toggle--activated"), r.splice(s, 1)) : ($(".o-toggle[data-receiver-id='" + t + "']").addClass("o-toggle--activated"), r.push(t)), $(".EXT_DOCS_RECIEVERS > input").val(r.join(";"))
	}
	$(".EXT_DOCS_RECIEVERS > input").val(r.join(";")), t.appendChild(i), $(".d-receivers__receiver").off("click"), $(".d-receivers__receiver").on("click", function () {
		c($(this));
		var e = $(this).data("receiver-type");
		let t = !0;
		$(".o-toggle[data-receiver-type='" + e + "']").each(function () {
			$(this).hasClass("o-toggle--activated") || (t = !1)
		});
		let s = $(".o-toggle[data-master-type='" + e + "']");
		t ? s.hasClass("o-toggle--activated") || s.addClass("o-toggle--activated") : s.removeClass("o-toggle--activated")
	}), $(".js-d-receivers__header").off("click"), $(".js-d-receivers__header").on("click", function () {
		var e = $(this).data("master-type"),
			t = $(this).find(".o-toggle"),
			s = t.hasClass("o-toggle--activated");
		$(".o-toggle[data-receiver-type='" + e + "']").each(function () {
			s ? c($(this)) : $(this).hasClass("o-toggle--activated") || c($(this))
		}), t.toggleClass("o-toggle--activated")
	})
}

function addMutationOberserverToAllCases() {
	(observerAllCases = new MutationObserver(function (e) {
		$(document).trigger("etray::cases_loaded"), observerAllCases.disconnect()
	})).observe($(".ETRAY_LIST_OF_CASES")[0], {
		characterData: !0,
		childList: !0
	})
}

function addMutationOberserverToSingleCase() {
	disable_all_btns(), (singleCaseLoadedObserver = new MutationObserver(function (e) {
		$(".ETRAY_CASE_TIMELINE_PARRENT > div").html().length > 0 && ($(document).trigger("etray::single-case-loaded"), $(document).trigger("etray::single-case-comments-loaded"), singleCaseLoadedObserver.disconnect(), "Afsluttet" == $("#js-case-element__inserted > div > .etray_case_status span").html() ? ($(".js-case__save-commentary").html("Gem kommentar og gen\xe5ben sag"), $(".js-case-save-close").addClass("display_none"), $(".js-case-save-reopen").removeClass("display_none")) : ($(".js-case__save-commentary").html("Gem kommentar"), $(".js-case-save-close").removeClass("display_none"), $(".js-case-save-reopen").addClass("display_none")))
	})).observe($(".ETRAY_CASE_TIMELINE_PARRENT > div")[0], {
		characterData: !0,
		childList: !0
	})
}

function addMutationOberserverToNumberOfCasesInput() {
	observeInputValue(document.querySelector(".ETRAY_NO_OF_OPEN_CASES > input"), "value", function (e, t) {
		if (t.length > 0) {
			if ($(".js-filter__number-of-cases").removeClass("o-badge--loading"), $(".o-page").hasClass("o-page--all-cases")) {
				$(".js-filter__open-cases .js-filter__number-of-cases").text($(".ETRAY_NO_OF_OPEN_CASES > input").val()), $(".js-filter__closed-cases .js-filter__number-of-cases").text($(".ETRAY_NO_OF_CLOSED_CASES > input").val());
				var s = 0;
				s = "closed_cases" == $(".ETRAY_LIST_VIEWER_CASES_LEVEL_2 > input").val() ? $(".ETRAY_NO_OF_CLOSED_EXCEEDED_SLA > input").val() : $(".ETRAY_NO_OF_OPEN_EXCEEDED_SLA > input").val(), $(".js-filter__sla .js-filter__number-of-cases").text(s), $(".js-filter__follow-up > .js-filter__number-of-cases").text($(".ETRAY_NO_OF_OPEN_FOLLOW_UP > input").val()), $(".js-filter__new .js-filter__number-of-cases").text($(".ETRAY_NO_OF_OPEN_NEW > input").val()), $(".js-filter__not_assigned .js-filter__number-of-cases").text($(".ETRAY_NO_OF_OPEN_NOT_ASSIGNED > input").val())
			} else {
				$(".js-filter__open-cases .js-filter__number-of-cases").text($(".ETRAY_NO_OF_MY_OPEN_CASES > input").val()), $(".js-filter__closed-cases .js-filter__number-of-cases").text($(".ETRAY_NO_OF_MY_CLOSED_CASES > input").val()), $(".js-filter__created_by_me .js-filter__number-of-cases").text($(".ETRAY_NO_OF_MY_OPEN_CREATED > input").val()), $(".js-filter__assigned_to_me .js-filter__number-of-cases").text($(".ETRAY_NO_OF_MY_OPEN_ASSIGNED > input").val()), $(".js-filter__follows .js-filter__number-of-cases").text($(".ETRAY_NO_OF_MY_OPEN_FOLLOWS > input").val());
				var s = 0;
				s = "closed_cases" == $(".ETRAY_LIST_VIEWER_CASES_LEVEL_2 > input").val() ? $(".ETRAY_NO_OF_MY_CLOSED_EXCEEDED_SLA > input").val() : $(".ETRAY_NO_OF_MY_OPEN_EXCEEDED_SLA > input").val(), $(".js-filter__sla .js-filter__number-of-cases").text(s)
			}
		}
	})
}

function UM_USERNAME_VALIDATION(e) {
	!0 == Set_UM_USER_INIT && ($(".UM_USER_INIT > input").val(e), $(".BTN_GetUserValidation > a").click(), $(".BTN_GetUserValidation_Result > input").val("N"), WAIT_FOR_UM_USERNAME_VALIDATION_ANSWER_ETRAY())
}

function WAIT_FOR_UM_USERNAME_VALIDATION_ANSWER_ETRAY() {
	"N" == $(".BTN_GetUserValidation_Result > input").val() ? setTimeout(WAIT_FOR_UM_USERNAME_VALIDATION_ANSWER_ETRAY, 100) : "true" == $(".UM_USER_INIT_USED > input").val() ? ($(".UM_USER_INIT > .Web_Error").html("Brugernavn er allerede anvendt"), $(".UM_USER_INIT > .Web_Error").show()) : $(".UM_USER_INIT > input").val().length > 20 ? ($(".UM_USER_INIT > .Web_Error").html("Brugernavn m\xe5 maks v\xe6re 20 cifre"), $(".UM_USER_INIT > .Web_Error").show()) : ($(".UM_USER_INIT > .Web_Error").html(""), $(".UM_USER_INIT > .Web_Error").hide())
}

function WAIT_FOR_UM_USERNAME_VALIDATION_ANSWER_VUE() {
	"N" == $(".BTN_GetUserValidation_Result > input").val() ? setTimeout(WAIT_FOR_UM_USERNAME_VALIDATION_ANSWER_VUE, 100) : "true" == $(".UM_USER_INIT_USED > input").val() ? $(".UM_USER_INIT > input").val() != $(".LOGIN_USER_INIT  > input").val() && document.dispatchEvent(new Event("username_init_error")) : document.dispatchEvent(new Event("username_init_no_error"))
}

function escapeRegExp(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function replaceAll(e, t, s) {
	return e.replace(RegExp(escapeRegExp(t), "g"), s)
}

function clearJSONfields() {
	$(".ETRAY_JSON_LIST_OF_OPEN_CASES > div").html(""), $(".ETRAY_JSON_LIST_OF_CLOSED_CASES > div").html(""), $(".ETRAY_JSON_LIST_OF_UPDATED_CASES > div").html(""), $(".ETRAY_EXT_DOCS_RAW_JSON > div").html(""), $(".ETRAY_EXT_DOCS_RAW_JSON_CLOSED > div").html(""), $(".ETRAY_EXT_DOCS_RAW_JSON_OPEN > div").html(""), $(".ETRAY_EXT_DOCS_RAW_JSON_LATEST_OTHER > div").html(""), $(".ETRAY_USER_PROFILE_RAW_JSON > div").html(""), $(".ETRAY_USER_PROFILE_USER_RAW_JSON > div").html(""), $(".ETRAY_USER_PROFILE_RAW_JSON_1_75 > div").html(""), $(".ETRAY_USER_PROFILE_RAW_JSON_76_150 > div").html(""), $(".ETRAY_USER_PROFILE_RAW_JSON_151_225 > div").html(""), $(".ETRAY_USER_PROFILE_RAW_JSON_226_300 > div").html(""), $(".ETRAY_USER_PROFILE_RAW_JSON_301_375 > div").html(""), $(".ETRAY_USER_PROFILE_RAW_JSON_376_450 > div").html(""), $(".ETRAY_USER_PROFILE_RAW_JSON_451_525 > div").html(""), $(".UM_RESULT > div").html(""), $(".ETRAY_CASE_TIMELINE_PARRENT > div").html(""), $(".ETRAY_LIST_OF_USERS > div").html("")
}

function readTimelineReadMsgCookie() {
	localStorage.getItem("on_case_timeline_hide_msg") ? hideTimelineReadMsg() : $("#js-checkbox__toogle-timeline_read_msg").prop("checked", !0)
}

function hideTimelineReadMsg() {
	$(".js-modal__single-case").hasClass("js-hide__timeline_read_msg") || $(".js-modal__single-case").addClass("js-hide__timeline_read_msg"), localStorage.setItem("on_case_timeline_hide_msg", !0)
}

function showTimelineReadMsg() {
	$(".js-modal__single-case").removeClass("js-hide__timeline_read_msg"), localStorage.removeItem("on_case_timeline_hide_msg")
}

function download_file(e) {
	"PROD" === $(".ENV > input").val() && (e = "https://portal.prod.aws.opennet.dk/eTrayPortal/N/search/download.aspx?epath=" + e), "TEST" === $(".ENV > input").val() && (e = "https://portal.test.aws.opennet.dk/eTrayPortal/N/search/download.aspx?epath=" + e), "DEV" === $(".ENV > input").val() && (e = "https://portal.dev.aws.opennet.dk/eTrayPortal/N/search/download.aspx?epath=" + e), e += "&webform=" + $("title").html(), e += "&portalName=" + $("#webform").attr("form"), e += "&loginKey=" + eTrayWebportal.User.Key, window.open(e)
}

// PowerBI report funcs - START
function RunReport(e, t) {
	if ($(document).trigger("vue::BILoadingTrigger", !0), $(document).trigger("vue::BIChangeTrigger", t), report && report.off("rendered"), "V\xe6lg" === t) {
		$(document).trigger("vue::BILoadingTrigger", !1);
		return
	}
	try {
		$.ajax({
			type: "POST",
			url: "https://pbiembeddedopennet.azurewebsites.net/api/PowerBIEmbeddedToken?code=US0sk5xiqoVMLU2tcl2oR1Jg0zt49Vj80ZjcM0bHCzPRAzFuAME4fg==",
			data: JSON.stringify({
				reportId: e
			}),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: successFunc,
			error: errorFunc
		})
	} catch (s) {
		console.log(s), handleError("RunReport", s)
	}
}

function successFunc(e, t) {
	try {
		if ("success" == t) {
			var s = e.EmbedToken,
				a = e.EmbedUrl,
				i = e.ReportId,
				r = $(".PBI_sharedSecret > input").val();
			console.log("v_sharedSecret", r);
			var o = window["powerbi-client"].models;
			let n = {
				$schema: "http://powerbi.com/product/schema#basic",
				target: {
					table: "v_POWERBI_EMBEDDED_RLS",
					column: "sharedSecret"
				},
				operator: "In",
				values: ["RBXvFBpyVUllMTsBynhzsLVEZcpzqNFcvQqLidwVVXhJkeGhMmnWPwTqeNuwOuaRlbwvwoWTKPJdqcmmOdWFKYSZelHxXWmGzdFgScBXBwzFYFctqQBYTtrPMDsULJaJsOJIEoKQaVKjevTUBJWrQeVLhxAdmbhtLJNdtmJQmMHxpKkONOLbnvVaMKmqPrKmfYMXicloVdpFoFauMMFaXDUYTAUJeTCRkUVYnVDisBgcBwVZXrRnveKzZhgNwoGGyLdbaddEOlCYApxrslwayNQKCCljJJorMKEcaydldTMvTIqRTdnuBXQANOLknSvavHBanbcVFJVSWHbVgYeLhFraZPMOQZMZaNWHkTmYmJMXesWtnpvUXnAVWOoDBpugWrZGaOuTiriLxNTNFIioNNuxbLLlIhEJAmdFGQMWgegVBUicWXrOCodyDkrjwycjdMQEegjmnPJOicayjDzLWiHEXVoCPpFKrxafBROKnBdkRDwmnruShknBhFHtWowfMjujtoJWEcwnmEqLMjVwZsLZChYXFKpAlXULsFIsUrGUpdMuocqwgHEPRSHzzzWpAQzfKzDgabROVXTrKOTmSuPCqbKrEfiUHFzzdQaOEHLCfYGchbmRtmsqsJWPfmAihQOzouGPWeoxTWfXCwJyRbKAPWPICbxlXZBTTMrDFaPNIYOvGgOwNLiwmdHqWDBuEqRniXbIXZMZzYvWCdEPmfiKDIKqQsyKRgBqvpEeFaWMjeSpHLGJijFHzbdyQaTpGNQuOzAHDacWKAAKURzzcDSQIepLPXTLnmHyeTxLmjftkFSTtdysdlFOsGGeWUTrNjUoTyVHAfsMJkkCInDtIZagtNcBnQCATAhDDoauIqEmWqRAuKXfutXGxwpHPYHUfZQMZLwReIfeQrgnXAgiKaHQxXKSMiOoQVzvBNRYSDKKlEtUxWpZzOkdwbfluKGuefaRFyLqDqsvfAlutAsLxzSMwfhvYYSxjkcqCFLBMiVePWXqbYxrKYHaKIMdWdnb"]
			};
			var l = {
				type: "report",
				tokenType: o.TokenType.Embed,
				accessToken: s,
				embedUrl: a,
				id: i,
				permissions: o.Permissions.All,
				filters: [n],
				settings: {
					filterPaneEnabled: !1,
					navContentPaneEnabled: !1
				}
			},
				d = $("#embedContainer")[0];
			(report = powerbi.embed(d, l)).setFilters([n]), report && report.on("rendered", function (e) {
				$(document).trigger("vue::BILoadingTrigger", !1)
			})
		} else alert("The report could not be embedded.  Please reload the page and try again.")
	} catch (c) {
		console.log(c), handleError("successFunc", c)
	}
}

function errorFunc() {
	try {
		alert("The report could not be embedded.  Please reload the page and try again.")
	} catch (e) {
		console.log(e), handleError("errorFunc", e)
	}
}

function handleError(e, t) {
	alert("Error in : " + e), alert("Exception: " + t.message)
}

// PowerBI report funcs - START
