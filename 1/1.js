$(document).ready(function () {
  $("#addRow").click(function () {
    // if($("input[type=radio]:checked").val() == "New"){
    //     alert("correct")
    // }
     
    // $('#tbody').append('<tr><td> + information + </td></tr>')
    $("#tbody").append(`
        <tr>
        <th  scope="row">
            <div class="d-flex h-25">
            <button class="btn btn-danger me-4 my-1 py-1 delete" style="width: 40%;">
                <img src="./assets/pic/icons8-delete-24.png" > Delete</button>
            <button class="btn btn-primary  me-4 my-1 py-1 clone" style="width: 40%;">
                <img src="./assets/pic/icons8-clone-64.png" style="width: 25px; height: 25px;"> Clone</button>
            </div>
            </th>
        <td class="h-25">
            <input class="w-100 py-1 my-1" type="text"  id="NumberInput">
        </td>
        <td class="h-25">
            <input class="w-100 py-1 my-1" type="text" id="TypeInput">
        </td class="h-25">
        <td >
            <div class="d-flex py-1">
            <div class="form-check me-2 py-1">
                <input class="form-check-input" type="radio" name="status" id="NewRadio">
                <label class="form-check-label" for="NewRadio">
                New
                </label>
              </div>
              <div class="form-check me-2 py-1">
                <input class="form-check-input" type="radio" name="status" id="InprogressRadio">
                <label class="form-check-label" for="InprogressRadio">
                 In progress
                </label>
              </div>
              <div class="form-check me-2 py-1">
                <input class="form-check-input" type="radio" name="status" id="confirmedRadio">
                <label class="form-check-label" for="confirmedRadio">
                    confirmed
                </label>
              </div>   
            </div>              
        </td>   
</tr> `)
//.click(function(e){
    // console.log("clicked")
    // console.log(e);
    // $('.delete').click(function(e){
    //     console.log("delete");
    //     console.log(e);
    //    $(this).closest('tr').remove();
    // })
    // $('.clone').click(function(e){
    //     console.log("clone");
    //     console.log(e);
    //     var r = $(this).closest('tr').clone();
    //     $(this).closest('tr').after(r);
    //   // $(this).closest('tr').remove();
    // })
});
// $('.delete').click(function(e){
//     console.log("delete");
//     console.log(e);
//    $(this).closest('tr').remove();
// })
// $('.clone').click(function(e){
//     console.log("clone");
//     console.log(e);
//     var r = $(this).closest('tr').clone();
//     $(this).closest('tr').after(r);
//   // $(this).closest('tr').remove();
// })

$('.table').on('click','input[type="button"]',function(e){
    $(this).closest('tr').remove();
})


  });

 



