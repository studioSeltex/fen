$(function()
{
    $("#site-footer form").submit(function(event)
    {
		
        $.ajax(
        {
            url: "catalog/view/theme/themegloballite/template/common/contact.php",
			type: "POST",
            data: $("#email-form").serialize(),
            success: function(msg)
            {
				alert("Success");
            }
        })
		event.preventDefault();
        return false;
    })
})