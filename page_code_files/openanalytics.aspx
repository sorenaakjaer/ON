<%@ Page Language="C#" %>
<%@ Import Namespace="System.Net" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.Text.RegularExpressions" %>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        string targetUrl = "https://opn-iframes-prod.azurewebsites.net/2?token=RMdYLMTiMxYoWU97RPLehMZzpIpCzPbM&ID=&GUID=704564&secret=MrCIKFNFXQCVLUxGbkJUHGANTdCqoBzoQhYzkdeButKTRzWMyJXTjpVgUEzzGNtnxbUwxcIVeToZGWaSmaJYqVUklXyrqYorUePPceidcMspMwzGeJXxiOYjzTnnAwNyxEoiBIvOmCNCRUrQgWoZmNbTxCDdbvbaQhXNFuVRLlAAiPAgqbNnKpSvHrLcEXpCklQWONhs";

        WebRequest request = WebRequest.Create(targetUrl);

        using (WebResponse response = request.GetResponse())
        using (Stream stream = response.GetResponseStream())
        using (StreamReader reader = new StreamReader(stream))
        {
            string content = reader.ReadToEnd();

            // Rewrite URLs
            string baseUrl = "https://opn-iframes-dev.azurewebsites.net";
            string pattern = "(src=|href=)\"(?!http)([^\"]*)\"";
            MatchEvaluator replacement = match => match.Groups[2].Value.StartsWith("/") ?
                match.Groups[1].Value + "\"" + baseUrl + match.Groups[2].Value + "\"" :
                match.Groups[1].Value + "\"" + baseUrl + "/" + match.Groups[2].Value + "\"";

            content = Regex.Replace(content, pattern, replacement, RegexOptions.IgnoreCase);

            Response.Write(content);
        }
    }
</script>
