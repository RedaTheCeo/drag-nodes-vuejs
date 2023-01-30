<script>
export default {
  data() {
    return {
      nodes: [
        {
          title: "Credit Score",
          style: "cs",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. nesciunt obcaecati delectus odit aperiam?",
        },
        {
          title: "Deposits",
          style: "dp",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. nesciunt obcaecati delectus odit aperiam?",
        },
        {
          title: "Withdrawals",
          style: "wd",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. nesciunt obcaecati delectus odit aperiam?",
        },
        {
          title: "Positions",
          style: "ps",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. nesciunt obcaecati delectus odit aperiam?",
        },
      ],
      title: "",
      description: "",
    };
  },
  // actions
  methods: {
    increment() {
      this.count++;
    },
    AddNode(title, description) {
      this.nodes.push({ title, description });
      this.title = "";
      this.description = "";
    },
    onDragStart(event, nodeType) {
      if (event.dataTransfer) {
        event.dataTransfer.setData("application/vueflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
      }
    },
  },
};
</script>

<template>
  <aside>
    <div class="description">You can drag these nodes to the pane.</div>
    <div class="inputs">
      <div>
        <label for="title">Title</label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div>
        <label for="description">Description</label>
        <input id="description" type="text" v-model="description" />
      </div>
      <button @click="AddNode(title, description)">New Node</button>
    </div>
    <div class="nodes">
      <div
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
      </div>
      <div
        v-for="node in nodes"
        :key="node"
        :class="`custom ${node.style}`"
        :draggable="true"
        @dragstart="onDragStart($event, `<div>
          <h2>${node.title}</h2>
          <p>${node.description}</p>
        </div>`)"
      >
        <h2>{{ node.title }}</h2>
        <p>{{ node.description }}</p>
      </div>
    </div>
  </aside>
</template>

<style scoped>
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
