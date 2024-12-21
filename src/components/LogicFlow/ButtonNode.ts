// import { HtmlNode } from "@logicflow/core";

// class ButtonNode extends HtmlNode {
//   setHtml(rootEl: any) {
//     const { properties } = this.props.model;
//     const el = document.createElement("div");
//     el.className = "uml-wrapper";
//     const html = `
//         <div>
//           <div class="uml-head">Head</div>
//           <div class="uml-body">
//             <div><button onclick="setData()">+</button> ${properties.name}</div>
//             <div>${properties.body}</div>
//           </div>
//           <div class="uml-footer">
//             <div>setHead(Head $head)</div>
//             <div>setBody(Body $body)</div>
//           </div>
//         </div>
//       `;
//     el.innerHTML = html;
//     rootEl.innerHTML = "";
//     rootEl.appendChild(el);
//     window.setData = () => {
//       const { graphModel, model } = this.props;
//       graphModel.eventCenter.emit("custom:button-click", model);
//     };
//   }
// }
