<!-- eslint-disable no-unused-vars -->
<script setup>
import {
  Position,
  VueFlow,
  useVueFlow,
  MarkerType,
  ConnectionLineType,
} from "@vue-flow/core";
import { nextTick, watch } from "vue";
import SideBar from "./SideBar.vue";
import { reactive } from "vue";
import { useNodesStore } from "@/stores/nodes";
import { isProxy, toRaw } from "vue";
import TransitionEdge from "./TransitionEdge.vue";

const store = useNodesStore();
store.emptyRule();
let id = 0;
let expanded = true;
const getId = () => `${id++}`;
const getLength = () => {
  const rawObjectOrArray = toRaw(nodes.value);
  return rawObjectOrArray.length;
};
// const getId = () => `dndnode_${id++}`;

const {
  findNode,
  onConnect,
  nodes,
  edges,
  addEdges,
  edgeTypes,
  addNodes,
  viewport,
  getNode,
  project,
  vueFlowRef,
  onPaneReady,
  getSelectedNodes,
  getNodes,
  getSelected,
  setNodes,
} = useVueFlow({
  nodes: store.testingNodes,
  defaultEdgeOptions: {
    // type: "smoothstep",
    type: "custom",
    animated: true,
  },
});

const onDragOver = (event) => {
  event.preventDefault();

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }

  // console.log(getNodes.value);
  const rawObjectOrArray = toRaw(nodes.value);
  console.log(rawObjectOrArray);
  store.setNodes(rawObjectOrArray.length);
  console.log("---------------------	START:	_nodes	---------------------");
  console.log(store._nodes);
  console.log("---------------------	END:	_nodes	---------------------");
};

onConnect((params) => addEdges([params]));

const onDrop = (event) => {
  const type = event.dataTransfer?.getData("application/vueflow/type");
  const label = event.dataTransfer?.getData("application/vueflow/label");
  const title = event.dataTransfer?.getData("application/vueflow/title");
  const value = event.dataTransfer?.getData("application/vueflow/value");
  const operator = event.dataTransfer?.getData("application/vueflow/operator");

  const { left, top } = vueFlowRef.value.getBoundingClientRect();

  const position = project({
    x: event.clientX - left,
    y: event.clientY - top,
  });

  const newNode = {
    id: getId(),
    type: parseInt(getId()) > 1 ? "default" : "input",
    position,
    label: label,
    events: {
      click: (node) => {
        store.handleChange(node.node.data, node.node);
        console.log("---------------------	START:	DATA	---------------------");
        console.log(node.node);
        console.log("---------------------	END:	DATA	---------------------");
      },
      customEvent: () => {
        console.log("Node 1 custom event");
      },
    },
    data: {
      title,
      operator,
      value,
    },
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
      { deep: true, flush: "post" },
      getNodes,
      (nodes) => {
        console.log("nodes changed", nodes);

        // addNodes([{
        //     id: "e1-2",
        //     type: "smoothstep",
        //     label: "false",
        //     source: "1",
        //     target: "2",
        //     style: { stroke: "red" },
        //   }]);
      }
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

const handleConnect = (params) => {
  console.log("---------------------	START:	edges	---------------------");
  console.log(edges);
  console.log("---------------------	END:	edges	---------------------");
};
const handleUpdate = () => {
  const rawObjectOrArray = toRaw(nodes.value);
  const newNodes = rawObjectOrArray.map((el) => {
    if (el.id == store.currentNode.id) {
      let test = el.label.toString();
      test = test.replace(el.data.title, store.rule.title);
      test = test.replace(el.data.operator, store.rule.operator);
      test = test.replace(el.data.value, store.rule.value);
      el.label = test;
      el.data.title = store.rule.title;
      el.data.operator = store.rule.operator;
      el.data.value = store.rule.value;
      // <h2 class='title'><span><img src='${store.currentNode.img}'/><span/>${store.currentNode.title}</h2>
      // el.label = `<div class='t'>
      //         <div >
      //           if
      //           <p class='decorated'>${store.rule.title}<p/>
      //             ${store.rule.operator}
      //           <p class='decorated'>${store.rule.value}<p/>
      //         <div/>
      //       </div>`
    }
    return el;
  });
  setNodes(newNodes);
  console.log("---------------------	START:	newNodes	---------------------");
  console.log(newNodes);
  console.log("---------------------	END:	newNodes	---------------------");
  console.log(toRaw(edges.value));
};
</script>
<template>
  <div class="dndflow" @drop="onDrop">
    <SideBar />
    <VueFlow  @dragover="onDragOver" @connect="handleConnect">
      <template #edge-custom="props">
        <TransitionEdge v-bind="props" />
      </template>
    </VueFlow>
    <!-- :style="{ transform: false ? 'scaleX(100%)' : 'scaleX(0%)' }" -->
    <div class="aside" :style="{ display: expanded ? 'block' : 'none' }">
      <h2>Data</h2>
      <div class="group">
        <label for="">Rule</label>
        <input type="text" v-model="store.rule.title" alt="" />
      </div>
      <div class="group">
        <label for="">Operator</label>
        <input type="text" v-model="store.rule.operator" alt="" />
      </div>
      <div class="group">
        <label for="">Value</label>
        <input type="text" v-model="store.rule.value" alt="" />
      </div>
      <button @click="handleUpdate">Update</button>
    </div>
  </div>
</template>

<style>
.aside {
  color: rgb(63, 63, 63);
  width: 20%;
  font-weight: 700;
  border-left-width: 1px solid rgb(130, 130, 130);
  padding: 15px 10px;
  font-size: 12px;
  background: rgba(238, 238, 238, 0.75);
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 10px #0000004d;
  overflow: hidden;
}
.aside button {
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
.group {
  padding: 10px 5px;
  margin-bottom: 10px;
  border: 0.5px solid gray;
}
.group input {
  color: #787878;
  width: 90%;
  font-size: 12px;
  margin-top: 5px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: rgba(109, 109, 109, 0.726) solid 0.5px;
  padding-bottom: 10px;
}
.title span {
  display: flex;
  justify-content: center;
}
.title span > img {
  width: 30px;
  margin-right: 5px;
  padding-bottom: 10px;
}
.node-text {
  color: #969696;
}
.decorated {
  color: #303030;
  text-decoration: underline;
}
.t > div {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #969696;
}
</style>
