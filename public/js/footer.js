const createFooter = ()=>{
  let footer = document.querySelector('footer');
  footer.innerHTML = `
    <div class="footer-content">
    <img src="./img/light-logo.png" alt="" class="logo">
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">men</li>
        <li ><a class="footer-link" href="#">t-shirts</a></li>
        <li ><a class="footer-link" href="#">sweatshirts</a></li>
        <li ><a class="footer-link" href="#">shirts</a></li>
        <li ><a class="footer-link" href="#">jeans</a></li>
        <li ><a class="footer-link" href="#">trousers</a></li>
        <li ><a class="footer-link" href="#">shoes</a></li>
        <li ><a class="footer-link" href="#">casuals</a></li>
        <li ><a class="footer-link" href="#">formals</a></li>
        <li ><a class="footer-link" href="#">sports</a></li>
        <li ><a class="footer-link" href="#">watch</a></li> 
      </ul>
      <ul class="category">
        <li class="category-title">women</li>
        <li ><a class="footer-link" href="#">t-shirts</a></li>
        <li ><a class="footer-link" href="#">sweatshirts</a></li>
        <li ><a class="footer-link" href="#">shirts</a></li>
        <li ><a class="footer-link" href="#">jeans</a></li>
        <li ><a class="footer-link" href="#">trousers</a></li>
        <li ><a class="footer-link" href="#">shoes</a></li>
        <li ><a class="footer-link" href="#">casuals</a></li>
        <li ><a class="footer-link" href="#">formals</a></li>
        <li ><a class="footer-link" href="#">sports</a></li>
        <li ><a class="footer-link" href="#">watch</a></li>
      </ul>
    </div>
  </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptate a obcaecati possimus
      voluptatum quia nam, accusamus doloribus consequatur consequuntur eos, iste cumque ducimus sint inventore, blanditiis
      eaque non perspiciatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eos blanditiis aperiam
      porro tenetur officia rerum quam vero doloremque, eum, in iste libero a quisquam incidunt numquam ea! Vero, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit, sapiente eligendi perferendis nesciunt, modi veniam, deserunt velit accusamus officia provident sint dolorum totam nemo vel iusto alias! Cum, totam.</p>
      <p class="info">support emails - help@clothing.com , 
        customersupport@clothing.com
      </p>
      <p class="info">
        telephone - 180 00 00 001 , 180 00 00 002
      </p>
      <div class="footer-social-container">
        <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
        </div>


      <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
      </div>
      </div>
      <p class="footer-credit">Clothing, Best apparels online store</p>
  `;
}
createFooter();