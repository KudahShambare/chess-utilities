import JotformEmbed from 'react-jotform-embed';

const Contact = ()=>{
    return(
        <>
        
    <iframe
      id="JotFormIFrame-250533563467561"
      title="Web Contact Form Template"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/250533563467561"
      frameborder="0"
     
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-250533563467561']", "https://form.jotform.com/")</script>
    
        </>
    )  
}
export default Contact;




