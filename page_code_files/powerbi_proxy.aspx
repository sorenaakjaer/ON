<%@ Page Language="C#" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.Net" %>
<%@ Import Namespace="System.Web.Script.Serialization" %>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.HttpMethod == "POST")
        {
            string requestBody;
            using (var reader = new StreamReader(Request.InputStream))
            {
                requestBody = reader.ReadToEnd();
            }

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;

            var webRequest = (HttpWebRequest)WebRequest.Create("https://pbiembeddedopennet.azurewebsites.net/api/PowerBIEmbeddedToken?code=US0sk5xiqoVMLU2tcl2oR1Jg0zt49Vj80ZjcM0bHCzPRAzFuAME4fg==");
            webRequest.Method = "POST";
            webRequest.ContentType = "application/json";
            using (var writer = new StreamWriter(webRequest.GetRequestStream()))
            {
                writer.Write(requestBody);
            }

            try
            {
                var httpResponse = (HttpWebResponse)webRequest.GetResponse();
                using (var reader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var responseText = reader.ReadToEnd();
                    Response.ContentType = "application/json";
                    Response.Write(responseText);
                }
            }
            catch (WebException ex)
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                Response.Write("Error contacting the external service.");
            }
        }
    }
</script>
