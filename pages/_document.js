import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
			<title>Next OWA Test</title>
			<link rel="icon" href="/favicon.ico" />
			<script type="text/javascript" src="/static/globalOWA.js"></script>
			{/* <script type="text/javascript">
				var owa_baseUrl = 'https://next-owa-track.herokuapp.com/';
				var owa_cmds = owa_cmds || [];
				owa_cmds.push(['setSiteId', 'e166b5571c46006ec88eced33981d80d']);
				owa_cmds.push(['trackPageView']);
				owa_cmds.push(['trackClicks']);

				(function() {
					var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
					owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
					_owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
					var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
				}());
			</script> */}
		</Head>
        <body>
          <Main />
          <NextScript />
		  
        </body>
      </Html>
    )
  }
}

export default MyDocument