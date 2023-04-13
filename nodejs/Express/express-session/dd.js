function toEvaluation() {
    var c = 0;
    var j = 0;
    for (i = 0; i < document.StDaForm.elements.length; i++) {
        if (document.StDaForm.elements[i].type == 'radio') {
            if (document.StDaForm.elements[i].checked) {
                c = 1;
            }
            if (document.StDaForm.elements[i].name != document.StDaForm.elements[i + 1].name) {
                j++;
                if (c == 0) {
                    urp.alert("请回答第" + j + "题!");
                    return false;
                }
                c = 0;
            }
        } else if (document.StDaForm.elements[i].type == 'text' &&
            document.StDaForm.elements[i].name == '0000000044') {
            if (document.StDaForm.elements[i].value != "" &&
                document.StDaForm.elements[i].value != null) {
                c = 1;
            }
            if (document.StDaForm.elements[i].name != document.StDaForm.elements[i + 1].name) {
                j++;
                if (c == 0) {
                    urp.alert("请填写第" + j + "题!");
                    return false;
                }
                c = 0;
            }

        }
    }
    var zgpj = window.document.StDaForm.zgpj.value;








    var a = 0;

    $("#jzzfb").find("option").each(function() {
        var zf = $(this).text();
        if (zgpj.indexOf(zf) != -1) {
            a++;
            return;
        }
    });



    if (flag) {
        var before_html = $("#buttonSubmit").html();
        //window.document.StDaForm.submit();
        var pageConditions = $(document.StDaForm).serialize();
        $.ajax({
            cache: true,
            type: "POST",
            async: true,
            url: "/student/teachingEvaluation/teachingEvaluation/evaluation",
            data: pageConditions,
            beforeSend: function() {
                $("#buttonSubmit").attr("disabled", "disabled");
                $("#buttonSubmit").html("正在提交...");
            },
            complete: function() {
                $("#buttonSubmit").removeAttr("disabled");
                $("#buttonSubmit").html(before_html);
            },
            error: function(xhr) {
                urp.alert("错误代码[" + xhr.readyState + "-" +
                    xhr.status + "]:获取数据失败！");
            },
            success: function(data) {

                if (data["result"].indexOf("/") != -1) {
                    window.location.href = data;
                } else if (data["result"] == "success") {
                    urp.alert("保存成功");
                    setTimeout(function() {
                        location.href = "/student/teachingEvaluation/evaluation/index";
                    }, 500);
                } else if (data["result"] == "error") {
                    $("#tokenValue").val(data["token"]);
                    urp.alert("保存失败,非法提交");
                } else if (data["result"] == "Less_than_specified_fraction") {
                    $("#tokenValue").val(data["token"]);
                    urp.alert("您当前的评教总分过低（≤40分），请重新评教。");
                } else {
                    urp.alert("保存失败");
                }
                /* if (data['type'] == 0) {
                 window.location.href = "/student/rollManagement/minorProgramRegistration/studyApplyList";
                 } else {

                 $("#sqyy").val(data["sqyy"]);
                 var tcont = "";
                 $.each(data["zxList"], function (i, v) {
                 tcont += "<tr class='odd' >";
                 tcont += "<td>" + v.famc + "</td><td>" + v.kcm + "</td><td>" + v.kcsxmc + "</td><td>" + v.kccj
                 + " </td>";
                 tcont += "<tr>";
                 });
                 $("#bjgTbody1").html(tcont);
                 $('#AIfuelux-wizard').wizard('selectedItem', {step: 2});
                 } */

            }
        });
    }
}