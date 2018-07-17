// // $(document).ready(function() {
// //     $(':submit').on('click', function(event) {
// //         event.preventDefault();
// //         var $button = $(this),
// //             $form = $button.parents('form');
// //         var opts = $.extend({}, $button.data(), {
// //             token: function(result) {
// //                 $form.append($('<input>').attr({ type: 'hidden', name: 'stripeToken', value: result.id })).submit();
// //             }
// //         });
// //         StripeCheckout.open(opts);
// //     });
// // });
// window.onload = function(){

//     var btn = document.createElement("BUTTON");        // Create a <button> element
//     var t = document.createTextNode("CLICK ME");       // Create a text node
//     btn.appendChild(t);                                // Append the text to <button>
//     document.body.appendChild(btn);  


//      var checkoutHandler = StripeCheckout.configure({
//         key: "pk_test_nTlDQv2r9x3WyKgAr6wgzoqW",
//         locale: "auto"
//       });
      
//        btn.onclick(function(ev) {
//           console.log("checkout")
//         checkoutHandler.open({
//           name: "Sample Store",
//           description: "Example Purchase",
//           token: handleToken
//         });
//       });
//       function handleToken(token) {
//         fetch("/charge", {
//           method: "POST",
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify(token)
//         })
//         .then(output => {
//           if (output.status === "succeeded")
//             document.getElementById("shop").innerHTML = "<p>Purchase complete!</p>";
//         })
//       }
      

// }

