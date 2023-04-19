import './Footer.css'
export default function () {
  return (
    <footer className="footer">
      <div className="containerFooter">
      <hr />
        <div className="row">
          <div className="col-md-4">
            <h4>nomadr-webshop</h4>
            <p>A website made with microfrontends</p>
          </div>
          <div className="col-md-4">
            <h4>Disclaimer</h4>
            <p>These products are not real.</p>
          </div>
          <div className="col-md-4">
            <h4>Privacy Policy</h4>
            <p>Nomadr-webshop will not save any of your data.</p>
          </div>
        </div>
        <div>
          <div className="aboutnomadr">
          <svelte-extension name="about-link"></svelte-extension>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
}

