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
            testingNodes:
                [
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
                        // events: {
                        //   click: (node) => {
                        //     console.log(node.node.data);
                        //     console.log(
                        //       "---------------------	START:	getSelected	---------------------"
                        //     );
                        //     console.log(getSelected);
                        //     console.log(
                        //       "---------------------	END:	getSelected	---------------------"
                        //     );
                        //   },
                        //   customEvent: () => {
                        //     console.log("Node 1 custom event");
                        //   },
                        // },
                        position: { x: 250, y: 25 },
                        data: { toolbarPosition: "12px" },
                        // markerEnd: MarkerType.Arrow,
                        // style: { stroke: "orange" },
                        // labelBgStyle: { fill: "orange" },
                    },
                    {
                        id: "2",
                        type: "default",
                        label: "Second node",
                        position: { x: 450, y: 385 },
                        selectable: true,
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
                lineType: 'smoothstep'
            }),
            options: {
                lineType: 'smoothstep'
            }
        }
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
        handleChange(rule , node) {
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
        }
    },
    getters: {

    }
});

