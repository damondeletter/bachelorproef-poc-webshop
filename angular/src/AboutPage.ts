import { Component, Inject } from '@angular/core';

@Component({
  template: `
    <div class="about">
        <h3 class="about">About Nomadr-webshop</h3>
      <div class="section1">
        <hr/>
        <h4>A website for all tech lovers</h4>
        <p>Nomadr-webshop is an online destination for all your technology needs. We offer a wide range of high-quality products including laptops, headsets, keyboards, and more. Our products are sourced from leading brands and manufacturers, ensuring the highest quality and reliability.</p> 
        <p>At Nomadr-webshop, we are committed to providing our customers with the best possible shopping experience. We offer fast and reliable shipping, competitive pricing, and exceptional customer service. Whether you're looking for the latest tech gadgets or simply need to upgrade your equipment, we have everything you need to stay connected and productive.</p>
        <p>At Nomadr-webshop, we believe that technology should be accessible to everyone. That's why we strive to offer products that are affordable without compromising on quality. We are dedicated to providing our customers with the best possible value for their money.</p>
      </div>
        <hr/>
       

        <div>
            <h4>Nomadr-webshop team</h4>
            <p>Our team is made up of tech enthusiasts who are passionate about providing our customers with the best possible shopping experience. We are committed to providing our customers with the best possible value for their money. We are dedicated to providing our customers with the best possible value for their money.</p>
            <div class="outercircle">
            <h5>CEO</h5>
            <img class="profilepicture" src="https://media.licdn.com/dms/image/C4E03AQEga7ELgCkiRw/profile-displayphoto-shrink_400_400/0/1615200385668?e=1687392000&v=beta&t=_km7-VTh83DPpOh2XsyoXD_oJu_LVtZr9BiQzrikYAo" alt="ceo"/>
            <p class="ceo"><em>Damon De Letter</em></p>

            <a href="https://www.linkedin.com/in/damon-de-letter-04880b208/" target="_blank">Linkedin</a>
            </div>
        </div>
    </div>
  `,
  styles: [
    `
      .about {
        text-align: center;
      }

      .section1 {
        margin: 2rem;
      }

      .ceo {
        font-weight: bold;
      }
            
      .profilepicture {
        border-radius: 50%;
      }


    `
  ]
})
export class AboutPage {

  constructor(@Inject('Props') public props: any) {}

}