<template>
  <div class="container wrapper">
    <div class="row">
      <div class="col-12 bg-light">
        <div class="col-12 mt-2 bg-grey">
          <form action>
            <div class="form-group row">
              <label for="member_name" class="col-12 col-form-label">請填寫真實姓名</label>
              <div class="col-sm-10 col-md-12">
                <input type="text" class="form-control" id="member_name" placeholder="請輸入真實姓名" required/>
              </div>
            </div>
            <div class="form-group row">
              <label for="member_phonenumber" class="col-12 col-form-label">手機號碼</label>
              <div class="col-sm-10 col-md-12">
                <input
                  type="text"
                  class="form-control"
                  id="member_phonenumber"
                  placeholder="請輸入手機號碼"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="member_bdday" class="col-12 col-form-label">生日</label>
              <div class="col-sm-10 col-md-12">
                <input type="date" class="form-control" id="member_bdday" placeholder="請選擇生日" />
              </div>
            </div>
            <div class="form-group row">
              <label for="member_address" class="col-12 col-form-label">地址</label>
              <div class="col-sm-10 col-md-12">
                <select name id="address_area" class="form-control">
                  <option value="1">台北市</option>
                  <option value="2">新北市</option>
                </select>
                <select name id="address_town" class="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div class="col-sm-10 col-md-12">
                <input type="text" class="form-control" id="member_address" placeholder="路名街道" />
              </div>
            </div>
            <div class="form-group row">
              <label for="member_note" class="col-12 col-form-label">備註</label>
              <div class="col-sm-10 col-md-12">
                <input type="text" class="form-control" id="member_bdday" placeholder="會員審核(可填寫備註)" />
              </div>
            </div>
            <div class="form-group row">
              <label for="privacy_check" class="col-12 col-form-label">
                <input type="checkbox" id="privacy_check">您同意<span>隱私權同意聲明</span>
              </label>
            </div>
            <div class="form-group row">
              <div class="col-sm-10 col-md-12 fix_txt">
                <input type="submit" placeholder="" class="btn btn-warning fix_btn"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {};
  }
};
</script>

<style>
.bg-light {
  background-color: #fff;
}
.bg-grey {
  background-color: #f5f5f5;
}

#address_area,#address_town{
  display: inline-flex;
  width: 48%;
  color: #c0c0c0;
  font-size: .8em;
}
.fix_btn{
  width: 100%;
  min-height: 45px;
  font-size: 0;
}
.fix_txt::before{
  content: '送出';
  color: #fff;
  font-size: 1em;
  position: absolute;
  left: 50%;
  transform: translateX(-1em);
  padding: 5px 0;;
  min-height: 45px;
  line-height: 1.5;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #c0c0c0;
  font-size: .8em;
  opacity: .8; /* Firefox */
}

select + select{
  position: relative;
  left: 2%;
}
select{
  margin-bottom: 10px;
}
.col-form-label{
  font-size: .7em;
}
#privacy_check~span{
  color: #d0021b;
}

</style>