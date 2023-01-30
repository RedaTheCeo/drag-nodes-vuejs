<!-- eslint-disable no-unused-vars -->
<script setup>
import { Position, VueFlow, useVueFlow, MarkerType } from "@vue-flow/core";
import { nextTick, watch } from "vue";
import SideBar from "./SideBar.vue";
import { reactive } from "vue";

let id = 0;
const getId = () => `dndnode_${id++}`;

const {
  findNode,
  onConnect,
  nodes,
  edges,
  addEdges,
  addNodes,
  viewport,
  getNode,
  project,
  vueFlowRef,
  onPaneReady,
  getSelectedNodes,
  getNodes,

} = useVueFlow({
  nodes: [
    {
      id: "1",
      type: "input",
      label: (
        <div>
          <h2>First Node</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. nesciunt
            obcaecati delectus odit aperiam?
          </p>
        </div>
      ),
      position: { x: 250, y: 25 },
      data: { toolbarPosition: Position.Top },
      // markerEnd: MarkerType.Arrow,
      // style: { stroke: "orange" },
      // labelBgStyle: { fill: "orange" },
    },
    {
      id: "2",
      type: "default",
      label: "Second node",
      position: { x: 450, y: 385 },
      // markerEnd: MarkerType.Arrow,
      // style: { stroke: "orange" },
      // labelBgStyle: { fill: "orange" },
    },
    {
      id: "3",
      type: "default",
      label: "Third node",
      position: { x: 50, y: 385 },
    },
    {
      id: "e1-2",
      type: "smoothstep",
      label: "True",
      source: "1",
      target: "2",
      style: { stroke: "green" },
    },
    {
      id: "e1-3",
      type: "smoothstep",
      label: "false",
      source: "1",
      target: "3",
      style: { stroke: "red" },
    },
  ],
});

const onDragOver = (event) => {
  event.preventDefault();

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }

  console.log(getNodes.value)
};

onConnect((params) => addEdges([params]));

const onDrop = (event) => {
  const type = event.dataTransfer?.getData("application/vueflow");

  const { left, top } = vueFlowRef.value.getBoundingClientRect();

  const position = project({
    x: event.clientX - left,
    y: event.clientY - top,
  });

  const newNode = {
    id: getId(),
    type,
    position,
    label: `${type}`,
  };

  addNodes([newNode]);

  // align node position after drop, so it's centered to the mouse
  nextTick(() => {
    const node = findNode(newNode.id);
    const stop = watch(
      () => node.dimensions,
      (dimensions) => {
        if (dimensions.width > 0 && dimensions.height > 0) {
          node.position = {
            x: node.position.x - node.dimensions.width / 2,
            y: node.position.y - node.dimensions.height / 2,
          };
          stop();
        }
      },
      { deep: true, flush: "post" }
    );
  });
};

//Edit

const defaultLabel = "-";

const opts = reactive({
  bg: "#fff",
  label: "First Node",
  hidden: false,
});

const updateNode = () => {
  const node = getNode.value("1");
  node.label = opts.label.trim() !== "" ? opts.label : defaultLabel;
  node.style = { backgroundColor: opts.bg };
  node.hidden = opts.hidden;
  console.log(getSelectedNodes);
};

onPaneReady(({ fitView }) => {
  // fitView();
  // updateNode();
});
// watch the stored nodes
watch(getNodes, (nodes) => {
  console.log('nodes changed', nodes)
  // addNodes([{
  //     id: "e1-2",
  //     type: "smoothstep",
  //     label: "false",
  //     source: "1",
  //     target: "2",
  //     style: { stroke: "red" },
  //   }]);
});


</script>
<template>
  <div class="dndflow" @drop="onDrop">
    <SideBar />

    <VueFlow @dragover="onDragOver" lineType="smoothstep">
      <div class="updatenode__controls">
        <label>label:</label>
        <input v-model="opts.label" @input="updateNode" />

        <label class="updatenode__bglabel">background:</label>
        <input v-model="opts.bg" type="color" @input="updateNode" />

        <div class="updatenode__checkboxwrapper">
          <label>hidden:</label>
          <input v-model="opts.hidden" type="checkbox" @change="updateNode" />
        </div>
      </div>
    </VueFlow>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/@vue-flow/core@1.12.7/dist/style.css";
@import "https://cdn.jsdelivr.net/npm/@vue-flow/core@1.12.7/dist/theme-default.css";
@import "https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css";
@import "https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css";
@import "https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css";

html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  text-transform: uppercase;
  font-family: "JetBrains Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.updatenode__controls {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 4;
  font-size: 11px;
  background-color: #d3d3d3;
  border-radius: 10px;
  padding: 8px;
}
.updatenode__controls label {
  display: blocK;
}
.updatenode__controls input {
  padding: 2px;
  border-radius: 5px;
}
.updatenode__bglabel {
  margin-top: 8px;
}
.updatenode__checkboxwrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
</style>
