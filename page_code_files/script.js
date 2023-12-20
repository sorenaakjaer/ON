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
		, "true" == $(".show_user_admin_menu").html() || $(".menu_user_admin").addClass("hidden_field")
		, "true" == $(".show_end_customer_orders").html() || $(".menu_end_customer_orders").addClass("hidden_field")
		, "true" == $(".show_end_customer_pricing_config").html() || $(".menu_end_customer_pricing_config").addClass("hidden_field")
		, $.getScript("https://cdn.jsdelivr.net/npm/vue@2", function (e, t, s) {
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
			}
		},
		data() {
			return {
				query: '',
				isOpen: false,
			}
		},
		computed: {
			itemsWithProps() {
				return this.items.map(item => {
					// Check if the current tag exists in this.selectedTags
					const isSelected = this.selected_items.findIndex(selectedItem => selectedItem === item.value) > -1
					// Return a new object for the tag with the v_selected property
					return {
						...item,
						v_selected: isSelected
					};
				})
			},
			itemsSorted() {
				return this.itemsWithProps.slice().sort((a, b) => {
					// Then, sort alphabetically by value
					if (a.value < b.value) {
						return -1;
					}
					if (a.value > b.value) {
						return 1;
					}
					return 0;
				});
			},
			filteredItems() {
				return this.itemsSorted.filter(item => item.value.toLowerCase().includes(this.query.toLowerCase()));
			}
		},
		methods: {
			setIsOpen(bool) {
				console.log('isOpen', bool)
				this.isOpen = bool
				if (bool) {
					this.$nextTick(_ => {
						this.$refs.query_input.focus()
					})
				}
			},
			toggleItem(item) {
				console.log('emit::toggle_item')
				this.$emit('toggle_item', item)
			},
			onMultiSelectBGClick() {
				this.setIsOpen(false)
				this.$emit('close')
			}
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
				return this.oldAndNewTags.map(tag => {
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
					// First, sort by the v_selected property
					if (a.v_selected && !b.v_selected) {
						return -1;
					}
					if (!a.v_selected && b.v_selected) {
						return 1;
					}

					// Then, sort alphabetically by value
					if (a.value < b.value) {
						return -1;
					}
					if (a.value > b.value) {
						return 1;
					}
					return 0;
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
				if (this.isEdited) {
					this.isForgotToSave = true
				} else {
					this.$emit('close')
				}
			},
			closeWithoutSaving() {
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
			/* START 17-12-23 */
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
			theFilteredSelectedTags: []
		},
		computed: {
			/* START 17-12-23 */
			isNewDesignActive() {
				const arrOfActivatedCompanies = ['SP Prod Company', 'OpenNet']
				return arrOfActivatedCompanies.indexOf(this.theActiveLoggedInCompany) > -1
			},
			allCaseGroups() {
				const uniqueTags = []
				this.cases.forEach(caseItem => {
					if (caseItem['v_groups']) {
						caseItem['v_groups'].forEach(tag => {
							const idx = uniqueTags.findIndex(allTag => allTag.value === tag.value)
							if (idx < 0) {
								uniqueTags.push(tag)
							}
						})
					}
				})

				return uniqueTags;
			},
			allCaseTags() {
				const uniqueTags = []
				this.cases.forEach(caseItem => {
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
			/*pbiReports() {
				let e = this.PBIReportsData.filter(e => e.area === this.activeCategory),
					t = e.findIndex(e => e && "V\xe6lg" === e.reportDisplayName);
					return e.length > 0 && t < 0 && e.unshift({
					reportDisplayName: "V\xe6lg",
					reportId: "placeholderDropdown"
				}), e
			},
			*/

			pbiReports() {
				if (!this.PBIReportsData) {
					// throw new Error('PBIReportsData is not defined')
					return []
				}

				let e = this.PBIReportsData.filter(e => e.area === this.activeCategory),
					t = e.findIndex(e => e && "Vælg" === e.reportDisplayName);
				if (e.length > 0 && t < 0) {
					e.unshift({
						reportDisplayName: "Vælg",
						reportId: "placeholderDropdown"
					});
				}

				return e;
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
			casesFiltered2() {
				if (this.theActiveFilter === "active") {
					return this.casesOpen
				} else {
					return this.casesClosed
				}
			},
			caseFilteredWithGroups() {
				if (this.theActiveFilterGroups.length < 1) {
					return this.casesFiltered2
				} else {
					return this.casesFiltered2.filter(itemCase => {
						if (!itemCase.v_groups || itemCase.v_groups.length === 0) {
							return false;
						}
						return this.theActiveFilterGroups.every(group =>
							itemCase.v_groups.map(vGroup => vGroup.value).includes(group))
					})
				}
			},
			caseFilteredWithTags() {
				if (this.theActiveFilterTags.length < 1) {
					return this.caseFilteredWithGroups
				} else {
					return this.caseFilteredWithGroups.filter(itemCase => {
						if (!itemCase.v_tags || itemCase.v_tags.length === 0) {
							return false;
						}
						return this.theActiveFilterTags.every(tag =>
							itemCase.v_tags.map(vTag => vTag.value).includes(tag))
					})
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
				return "all_cases" == this.activeCategory || "my_cases" == this.activeCategory
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
			},
			allCaseTags(newArr, oldArr) {
				newArr.forEach(item => {
					const idx = this.theActiveFilterTags.indexOf(item.value)
					if (idx > -1) {
						this.theActiveFilterTags.splice(idx, 1)
					}
				})
			},
			allCaseGroups(newArr, oldArr) {
				newArr.forEach(item => {
					const idx = this.theActiveFilterGroups.indexOf(item.value)
					if (idx > -1) {
						this.theActiveFilterGroups.splice(idx, 1)
					}
				})
			}
		},
		methods: {
			/* START 17-12-23 */
			removeAllFilters() {
				this.theActiveFilterTags = []
				this.theActiveFilterGroups = []
				this.resetFilters()
			},
			toggleFilterTag(item) {
				const idx = this.theActiveFilterTags.indexOf(item.value)
				if (idx < 0) {
					this.theActiveFilterTags.push(item.value)
				} else {
					this.theActiveFilterTags.splice(idx, 1)
				}
			},
			toggleFilterGroup(item) {
				const idx = this.theActiveFilterGroups.indexOf(item.value)
				if (idx < 0) {
					this.theActiveFilterGroups.push(item.value)
				} else {
					this.theActiveFilterGroups.splice(idx, 1)
				}
			},
			updateItemTags(tagsArr) {
				const caseOnId = this.theActiveCaseForTag.onid
				const caseIdx = this.cases.findIndex(caseItem => caseItem.onid === caseOnId)
				$('.updTagOrGroup_Input > input').val(JSON.stringify(tagsArr));
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
					window.scroll(0, 0), $('ul.o-menu__items__inner > li[class^="js-"]').each(function () {
						$(this).removeClass("li--active")
					}), $(".js-o-cases__container").removeClass("o-cases__container--loading"), $(".o-page").removeClass("o-page--all-cases"), $(".o-page").hasClass("o-page--docs") || $(".o-page").addClass("o-page--docs");
					var s = "";
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
					}
					if ("Report" === e || "Invoice" === e) {
						var a = $(".PBI_ListOfReports > div").html();


						a.length > 3 && (this.PBIReportsData = JSON.parse(a)), this.theInvoiceBIExplainer = $(".PBI_Intro_Invoice > div").html(), this.theReportBIExplainer = $(".PBI_Intro_Report > div").html()

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
					this.resetFilters();
				}
			},
			resetFilters() {

				this.infiniteScrollNumber = 50, this.clearSearchQuery(), this.activeType = null, $(".vue-filter-2").each(function () {
					$(this).removeClass("o-btn__filter---active")
				}), this.theUnreadSelected = "Alle", this.theActiveFilter = "active", this.theActiveCaseCategory = "Alle kategorier", this.theActiveOnpProductListFilter = "Fra alle"
			},
			setActiveCaseCategory(e) {
				this.theActiveCaseCategory = e
			},
			setTheActiveFilter(e) {
				this.theActiveFilter = e, this.clearSearchQuery(), this.theUnreadSelected = "Alle", this.activeType = null, $(".vue-filter-2").each(function () {
					$(this).removeClass("o-btn__filter---active")
				})
			},
			setActiveType(e, t) {
				this.infiniteScrollNumber = 50, $(".vue-filter-2").each(function () {
					$(this).removeClass("o-btn__filter---active")
				}), this.activeType === e ? this.activeType = null : (this.activeType = e, $(t.currentTarget).addClass("o-btn__filter---active"))
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
			//console.log('mounted')
			var e = this,
				t = window.location.href,
				s = t.indexOf("&ID=");
			if (0 > t.indexOf("&ID=&GUID")) {
				var a = t.substring(s + 4, t.indexOf("&GUID="));
				this.setActivecCategory("all_cases"), this.$refs.v_search_query.value = a, this.searchQuery = a
			}
			this.theActiveLoggedInCompany = $(".FROM_COMPANY > input").val()
			/* START 17-12-23 */
			this.$nextTick(_ => {
				$(document).trigger("trigger::vue_mounted")
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
var run_autoupdate = !1;
var $form = $(".js-case-drop-files");
var droppedFiles = !1;
var Set_UM_USER_INIT = !0;

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

/* START 17-12-23 */
addPopperFromCDN()

function addPopperFromCDN() {
	// Create a <link> element for the CSS file
	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = 'https://unpkg.com/vue-virtual-scroller/dist/vue-virtual-scroller.css'
	document.head.appendChild(link)

	// Create a <script> element for the Vue Multiselect script
	$.getScript("https://unpkg.com/@popperjs/core@2", function (e, t, s) {
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