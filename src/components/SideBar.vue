<!-- eslint-disable vue/no-parsing-error -->
<script setup>
import { useNodesStore } from "@/stores/nodes";

const store = useNodesStore();

const onDragStart = (event, label, node) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData("application/vueflow/type", label);
    event.dataTransfer.setData("application/vueflow/label", label);
    event.dataTransfer.setData("application/vueflow/title", node.title);
    event.dataTransfer.setData("application/vueflow/value", node.value);
    event.dataTransfer.setData("application/vueflow/operator", node.operator);
    event.dataTransfer.effectAllowed = "move";
  }
};
</script>

<template>
  <aside>
    <h3>Blocks</h3>
    <div class="search">
      <img src="../../public/search.svg" />
      <input type="text" placeholder="search .." />
    </div>
    <div class="subnav">
      <div id="triggers">Triggers</div>
      <div id="actions">Actions</div>
      <div id="loggers">Loggers</div>
    </div>

    <div class="description">You can drag these nodes to the pane.</div>
    <!-- <div class="inputs">
      <div>
        <label for="title">Title</label>
        <input id="title" type="text" v-model="store.title" />
      </div>
      <div>
        <label for="description">Description</label>
        <input id="description" type="text" v-model="store.description" />
      </div>
      <button @click="store.AddNode(store.title, store.description)">
        New Node
      </button>
    </div> -->
    <div class="nodes">
      <!-- <div
        class="vue-flow__node-input"
        :draggable="true"
        @dragstart="onDragStart($event, 'input')"
      >
        Input Node
      </div>

      <div
        class="vue-flow__node-default"
        :draggable="true"
        @dragstart="onDragStart($event, 'default')"
      >
        Default Node
      </div>

      <div
        class="vue-flow__node-output"
        :draggable="true"
        @dragstart="onDragStart($event, 'output')"
      >
        Output Node
      </div> -->
      <div
        v-for="node in store.nodes"
        :key="node"
        :class="`custom ${node.style}`"
        :draggable="true"
        @dragstart="
          onDragStart(
            $event,
            `<div class='t'>
              <h2 class='title'><span><img src='${node.img}'/><span/>${node.title}</h2>
              <div >
                if
                <p class='decorated'>${node.title}<p/>
                  ${node.operator}
                <p class='decorated'>${node.value}<p/>
              <div/>
            </div>`,
            node
          )
        "
      >
        <h2>{{ node.title }}</h2>
        <p>{{ node.description }}</p>
      </div>
    </div>
  </aside>
</template>

<style scoped>
aside h3 {
  font-size: 20px;
  font-weight: bold;
  color: #393c44;
  text-align: start;
}
.search input {
  width: 100%;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e8e8ef;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(34, 34, 87, 0.05);
  border-radius: 5px;
  text-indent: 35px;
  font-size: 16px;
}
.search img {
  position: absolute;
  margin-top: 10px;
  width: 18px;
  margin-left: 12px;
}
.subnav {
  border-bottom: 1px solid #e8e8ef;
  width: calc(100% + 40px);
  margin-left: -40px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.subnav div {
  margin-left: 20px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #808292;
  height: 48px;
  line-height: 48px;
  cursor: pointer;
}
.subnav div:nth-child(1) {
  color: #393c44 !important;
}
.subnav div:nth-child(1):after {
  display: block;
  content: "";
  width: 100%;
  height: 4px;
  background-color: #217ce8;
  margin-top: -4px;
}

.inputs {
  display: flex;
  flex-direction: column;
  padding-bottom: 18px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(117, 117, 117, 0.5);
}
.inputs div {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}
.inputs div > input {
  height: 24px;
  margin-top: 7px;
  border: 1px solid rgba(117, 117, 117, 0.5);
  border-radius: 4px;
  outline: none;
}
.inputs button {
  margin: auto;
  margin-top: 10px;
  padding: 7px;
  font-size: 12px;
  color: white;
  border: 1px solid rgba(117, 117, 117, 0.5);
  text-transform: uppercase;
  background: rgba(8, 75, 52, 0.75);
  border-radius: 4px;
  font-family: "Lexend Deca", sans-serif;
  cursor: pointer;
  width: 65%;
}
.custom {
  padding: 10px;
  border-radius: 3px;
  width: 150px;
  font-size: 12px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  color: rgb(150, 150, 150);
  background: #fff;
}
.cs {
  border-color: #ff0072;
}
.dp {
  border-color: #113abe;
}
.wd {
  border-color: #ff5e00;
}
.ps {
  border-color: #15ff00;
}
.nodes h2 {
  margin: 0;
  color: #1a192b;
  text-decoration: underline;
  font-weight: 300;
}
.nodes p {
  font-size: 10px;
  font-weight: 300;
}
</style>
