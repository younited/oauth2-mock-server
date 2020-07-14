const webMessageHtml = (code, state, redirectURI) => `
<!DOCTYPE html>
<html>

<head>
    <title>Authorization Response</title>
</head>

<body>
    <script type="text/javascript">
        (function(window, document, undefined) {
                // Begin : these values rendered by server
                var redirectURI = "${redirectURI}";
                var webMessageRequest = {};
                var authorizationResponse = {
                    type: "authorization_response",
                    response: {
                        code: "${code}",
                        state: "${state}"
                    }
                };
                // End
                var mainWin = (window.opener != window) ? window.opener : window.parent;
                // For relay mode

                        mainWin.postMessage({
                            type: "authorization_response",
                            response: authorizationResponse
                        }, redirectURI);

                })(this, this.document);
    </script>
</body>

</html>
`

module.exports = { webMessageHtml }