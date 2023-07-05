import hmacSHA512 from "crypto-js/hmac-sha512";

/* /* 비밀번호 보기 */
<FontAwesomeIcon icon="fa-light fa-eye" />;
<FontAwesomeIcon icon="fa-light fa-eye-slash" />;

/* necesito icons */
<FontAwesomeIcon icon="fa-light fa-user" />
<FontAwesomeIcon icon="fa-sharp fa-light fa-lock-keyhole" />
 */


function checkOnlyOne(element) {
  
  const checkboxes 
      = document.getElementsByName("gender");
  
  checkboxes.forEach((cb) => {
    cb.checked = false;
  })
  
  element.checked = true;
}