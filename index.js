$("input:checkbox").on("click", function () {
	var $box = $(this);
	if ($box.is(":checked")) {
		var group =
			"input:checkbox[name='" +
			$box.attr("name") +
			"']";
		$(group).prop("checked", false);
		$box.prop("checked", true);
	} else {
		$box.prop("checked", false);
	}
});
$(".filteradd").on("click", function () {
	var a = $(".filterlist").css("display");
	if (a != "none") {
		$(".filterlist").css("display", "none");
		$(".filteradd").html("<span>+</span>");
	} else {
		$(".filterlist").css("display", "inline");
		$(".filteradd").html("<span>-</span>");
	}
});
$(".collectionadd").on("click", function () {
	var a = $(".collectionlist").css("display");
	if (a != "none") {
		$(".collectionlist").css("display", "none");
		$(".collectionadd").html("<span>+</span>");
	} else {
		$(".collectionlist").css("display", "inline");
		$(".collectionadd").html("<span>-</span>");
	}
});
