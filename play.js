function getHeader() {
    $('#resume_header').text(name + "'s Resume");
}

function showExampleReceipt() {
    $('#receipt-body').append("<p>Rent - $1000</p><p>4 Roast Chickens @$6.99 each - $27.96</p><p>6 Bags of Lettuce @$2.50 each - $15</p><p>3 Bags of Greens @$2.99 each - $8.97</p><p>Loaf of Bread - $2.49</p><p>7 Cans of Tuna @$1.20 each - $8.40</p><p>Transportation @$45/week - $180</p><p>Electricity - $96.16</p><p>Phone - $32.03</p><p>TV - $51.73</p><p>Internet - $41.02</p><p>Natural Gas - $114.87</p><p>Total - </p><input type='text' class='form-control' placeholder='Calculate Total Here'><p><a data-toggle='modal' class='btn btn-primary btn-lg btn-success' onclick='addForms()'>Click to Begin Entry</a><p><p><a data-toggle='modal' class='btn btn-primary btn-lg btn-success' onclick='getChallenge()'>Click to Submit</a><p>");
}

function showEntryForm() {
    $('#receipt-body').append("<h2>This feature is only available to classes.  Please check back soon!</h2>");
}

function addForms() {
    $('#receipt-body').append("<div class='row'><div class='col-lg-6'><div class='input-group'><input type='text' class='form-control' aria-label='...' placeholder='Enter Purpose Here'></div><!-- /input-group --></div><!-- /.col-lg-6 --><div class='col-lg-6'><div class='input-group'><input type='text' class='form-control' aria-label='...' placeholder='Enter Cost Here'></div><!-- /input-group --></div><!-- /.col-lg-6 --></div><!-- /.row -->");
}