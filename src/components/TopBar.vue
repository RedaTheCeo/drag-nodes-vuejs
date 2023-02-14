

<template>
  <div class="top-bar">
    <div class="tb-first">
      <div class="arrow"><img src="../../public/arrow.svg" /></div>
      <div class="desc">
        <p>Your automation pipeline</p>
        <p>Marketing automation</p>
      </div>
    </div>
    <div class="tb-sec">
      <div>Diagram view</div>
      <div>Code editor</div>
    </div>
    <div class="tb-third">
      <div>Discard</div>
      <div>Publish to site</div>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  height: 61px;
  background-color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  border: 1px solid #e8e8ef;
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1823px;
}
.tb-first {
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow {
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: #f1f4fc;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.desc {
  margin-top: 15px;
  text-align: left;
}
.desc p:nth-child(1) {
  font-weight: 500;
  font-size: 16px;
  color: #393c44;
  margin: 0;
}
.desc p:nth-child(2) {
  color: #808292;
  font-size: 14px;
  margin-top: 5px;
}
.tb-sec {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 30%;
  cursor: pointer;
}
.tb-sec div:nth-child(1) {
  border: 1px solid #e8e8ef;
  background-color: #fbfbfb;
  width: 100%;
  height: 39px;
  max-width: 150px;
  line-height: 39px;
  border-radius: 5px 0px 0px 5px;
  color: #393c44;
  text-align: center;
}
.tb-sec div:nth-child(2) {
  border: 1px solid #e8e8ef;
  color: #808292;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #e8e8ef;
  width: 100%;
  max-width: 150px;
  height: 39px;
  line-height: 39px;
  text-align: center;
}
.tb-third {
  display: flex;
  align-items: center;
  gap: 17px;
  max-width: 40%;
}
.tb-third div {
  font-weight: 500;
  font-size: 14px;
  color: #a6a6b3;
  width: 175px;
  height: 38px;
  border: 1px solid #e8e8ef;
  border-radius: 5px;
  text-align: center;
  line-height: 38px;
  display: inline-block;
  vertical-align: top;
  transition: all 0.2s cubic-bezier(0.05, 0.03, 0.35, 1);
  cursor: pointer;
}
.tb-third div:nth-child(2) {
  color: #fff;
  background-color: #217ce8;
  width: 183px;
}
</style>