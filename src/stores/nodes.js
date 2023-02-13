import { defineStore } from "pinia";

export const useNodesStore = defineStore("nodes", {
  state: () => {
    return {
      nodes: [
        {
          title: "Credit Score",
          operator: "above",
          value: 300,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. nesciunt obcaecati delectus odit aperiam?",
          style: "cs",
          img: "https://img.icons8.com/fluency/48/null/engineering.png",
        },
        {
          title: "Deposits",
          operator: "above",
          value: 150,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. nesciunt obcaecati delectus odit aperiam?",
          style: "dp",
          img: "https://img.icons8.com/cute-clipart/64/null/circuit.png",
        },
        {
          title: "Withdrawals",
          operator: "above",
          value: 450,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. nesciunt obcaecati delectus odit aperiam?",
          style: "wd",
          img: "https://img.icons8.com/color-glass/48/null/circuit.png",
        },
        {
          title: "Positions",
          operator: "above",
          value: 550,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. nesciunt obcaecati delectus odit aperiam?",
          style: "ps",
          img: "https://img.icons8.com/color/48/null/sheets.png",
        },
      ],
      testingNodes: [
        {
          type: "input",
          dimensions: {
            width: 200,
            height: 139,
          },
          handleBounds: {
            source: [
              {
                id: "0__handle-bottom",
                position: "bottom",
                x: 96,
                y: 133.875,
                width: 8,
                height: 8,
              },
            ],
          },
          computedPosition: {
            x: 280.60308978406056,
            y: -99.64038317374687,
            z: 1000,
          },
          selected: true,
          dragging: false,
          resizing: false,
          initialized: true,
          data: {
            title: "Credit Score",
            operator: "above",
            value: "300",
          },
          events: {},
          id: "0",
          position: {
            x: 280.60308978406056,
            y: -99.64038317374687,
          },
          label:
            "<div class='t'>\n              <h2 class='title'><span><img src='https://img.icons8.com/fluency/48/null/engineering.png'/><span/>Credit Score</h2>\n              <div >\n                if\n                <p class='decorated'>Credit Score<p/>\n                  above\n                <p class='decorated'>300<p/>\n              <div/>\n            </div>",
        },
        {
          type: "default",
          dimensions: {
            width: 200,
            height: 139,
          },
          handleBounds: {
            source: [
              {
                id: "2__handle-bottom",
                position: "bottom",
                x: 96,
                y: 133.875,
                width: 8,
                height: 8,
              },
            ],
            target: [
              {
                id: "2__handle-top",
                position: "top",
                x: 96,
                y: -3,
                width: 8,
                height: 8,
              },
            ],
          },
          computedPosition: {
            x: -90.7288223161438,
            y: 420.35855090140643,
            z: 0,
          },
          selected: false,
          dragging: false,
          resizing: false,
          initialized: true,
          data: {
            title: "Deposits",
            operator: "above",
            value: "150",
          },
          events: {},
          id: "2",
          position: {
            x: -90.7288223161438,
            y: 420.35855090140643,
          },
          label:
            "<div class='t'>\n              <h2 class='title'><span><img src='https://img.icons8.com/cute-clipart/64/null/circuit.png'/><span/>Deposits</h2>\n              <div >\n                if\n                <p class='decorated'>Deposits<p/>\n                  above\n                <p class='decorated'>150<p/>\n              <div/>\n            </div>",
        },
        {
          type: "output",
          dimensions: {
            width: 200,
            height: 139,
          },
          handleBounds: {
            source: [
              {
                id: "4__handle-bottom",
                position: "bottom",
                x: 96,
                y: 133.875,
                width: 8,
                height: 8,
              },
            ],
            target: [
              {
                id: "4__handle-top",
                position: "top",
                x: 96,
                y: -3,
                width: 8,
                height: 8,
              },
            ],
          },
          computedPosition: {
            x: 441.54022351801893,
            y: 815.6600957934365,
            z: 0,
          },
          selected: false,
          dragging: false,
          resizing: false,
          initialized: true,
          data: {
            title: "Withdrawals",
            operator: "above",
            value: "450",
          },
          events: {},
          id: "4",
          position: {
            x: 441.54022351801893,
            y: 815.6600957934365,
          },
          label:
            "<div class='t'>\n              <h2 class='title'><span><img src='https://img.icons8.com/color-glass/48/null/circuit.png'/><span/>Withdrawals</h2>\n              <div >\n                if\n                <p class='decorated'>Withdrawals<p/>\n                  above\n                <p class='decorated'>450<p/>\n              <div/>\n            </div>",
        },
        {
          id: "vueflow__edge-00__handle-bottom-22__handle-top",
          label: "True",
          source: "0",
          sourceHandle: "0__handle-bottom",
          target: "2",
          targetHandle: "2__handle-top",
          type: "smoothstep",
          animated: true,
          data: {},
          events: {},
          sourceNode: {
            type: "input",
            dimensions: {
              width: 200,
              height: 139,
            },
            handleBounds: {
              source: [
                {
                  id: "0__handle-bottom",
                  position: "bottom",
                  x: 96,
                  y: 133.875,
                  width: 8,
                  height: 8,
                },
              ],
            },
            computedPosition: {
              x: 308.5,
              y: 104.5,
              z: 0,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            data: {
              title: "Credit Score",
              operator: "above",
              value: "300",
            },
            events: {},
            id: "0",
            position: {
              x: 308.5,
              y: 104.5,
            },
            label:
              "<div class='t'>\n              <h2 class='title'><span><img src='https://img.icons8.com/fluency/48/null/engineering.png'/><span/>Credit Score</h2>\n              <div >\n                if\n                <p class='decorated'>Credit Score<p/>\n                  above\n                <p class='decorated'>300<p/>\n              <div/>\n            </div>",
          },
          targetNode: {
            type: "default",
            dimensions: {
              width: 200,
              height: 139,
            },
            handleBounds: {
              source: [
                {
                  id: "2__handle-bottom",
                  position: "bottom",
                  x: 96,
                  y: 133.875,
                  width: 8,
                  height: 8,
                },
              ],
              target: [
                {
                  id: "2__handle-top",
                  position: "top",
                  x: 96,
                  y: -3,
                  width: 8,
                  height: 8,
                },
              ],
            },
            computedPosition: {
              x: 260.5,
              y: 366.5,
              z: 0,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            data: {
              title: "Withdrawals",
              operator: "above",
              value: "450",
            },
            events: {},
            id: "2",
            position: {
              x: 260.5,
              y: 366.5,
            },
            label:
              "<div class='t'>\n              <h2 class='title'><span><img src='https://img.icons8.com/color-glass/48/null/circuit.png'/><span/>Withdrawals</h2>\n              <div >\n                if\n                <p class='decorated'>Withdrawals<p/>\n                  above\n                <p class='decorated'>450<p/>\n              <div/>\n            </div>",
          },
        },
        {
          id: "vueflow__edge-22__handle-bottom-44__handle-top",
          label: "test",
          source: "2",
          sourceHandle: "2__handle-bottom",
          target: "4",
          targetHandle: "4__handle-top",
          type: "custom",
          animated: true,
          data: {},
          events: {},
          sourceNode: {
            type: "default",
            dimensions: {
              width: 200,
              height: 139,
            },
            handleBounds: {
              source: [
                {
                  id: "2__handle-bottom",
                  position: "bottom",
                  x: 96,
                  y: 133.875,
                  width: 8,
                  height: 8,
                },
              ],
              target: [
                {
                  id: "2__handle-top",
                  position: "top",
                  x: 96,
                  y: -3,
                  width: 8,
                  height: 8,
                },
              ],
            },
            computedPosition: {
              x: 113.73655537541026,
              y: 480.29261866159345,
              z: 1000,
            },
            selected: true,
            dragging: false,
            resizing: false,
            initialized: true,
            data: {
              title: "Withdrawals",
              operator: "above",
              value: "450",
            },
            events: {},
            id: "2",
            position: {
              x: 113.73655537541026,
              y: 480.29261866159345,
            },
            label:
              "<div class='t'>\n              <h2 class='title'><span><img src='https://img.icons8.com/color-glass/48/null/circuit.png'/><span/>Withdrawals</h2>\n              <div >\n                if\n                <p class='decorated'>Withdrawals<p/>\n                  above\n                <p class='decorated'>450<p/>\n              <div/>\n            </div>",
          },
          targetNode: {
            type: "default",
            dimensions: {
              width: 200,
              height: 139,
            },
            handleBounds: {
              source: [
                {
                  id: "4__handle-bottom",
                  position: "bottom",
                  x: 95.99997699912183,
                  y: 133.87489288393215,
                  width: 8,
                  height: 8,
                },
              ],
              target: [
                {
                  id: "4__handle-top",
                  position: "top",
                  x: 95.99997699912183,
                  y: -2.9999773715511786,
                  width: 8,
                  height: 8,
                },
              ],
            },
            computedPosition: {
              x: 825.0207267865928,
              y: 1009.9801826548158,
              z: 0,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            data: {
              title: "Positions",
              operator: "above",
              value: "550",
            },
            events: {},
            id: "4",
            position: {
              x: 825.0207267865928,
              y: 1009.9801826548158,
            },
            label:
              "<div class='t'>\n              <h2 class='title'><span><img src='https://img.icons8.com/color/48/null/sheets.png'/><span/>Positions</h2>\n              <div >\n                if\n                <p class='decorated'>Positions<p/>\n                  above\n                <p class='decorated'>550<p/>\n              <div/>\n            </div>",
          },
        },
      ],
      _nodes: [],
      title: "",
      description: "",
      currentId: "",
      currentNode: {},
      rule: {
        title: "Withdrawals",
        operator: "above",
        value: 450,
      },
      lineType: () => ({
        lineType: "smoothstep",
      }),
      options: {
        lineType: "smoothstep",
      },
    };
  },
  actions: {
    AddNode(title, description) {
      this.nodes.push({ title, description });
      this.title = "";
      this.description = "";
      this.rule.title = "";
      this.rule.operator = "";
      this.rule.value = "";
    },
    setNodes(nodes) {
      this._nodes = nodes;
    },
    handleChange(rule, node) {
      this.rule.title = rule.title;
      this.rule.operator = rule.operator;
      this.rule.value = rule.value;
      this.currentNode = node;
    },
    emptyRule() {
      this.rule.title = "";
      this.rule.operator = "";
      this.rule.value = "";
    },
    handleNodeChange(title, operator, value) {
      this.rule.title = title;
      this.rule.operator = operator;
      this.rule.value = value;
    },
  },
  getters: {},
});
