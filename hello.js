/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2021-06-27 20:06:40
 * @Description: hello
 * @LastEditors: kl
 */

const reactDict = [
  {
    branchName: "hooks-page",
    args: "page",
    acronym: "p",
    description: "纯页面",
  },
  {
    branchName: "hooks-table",
    args: "table",
    acronym: "t",
    description: "table + 分页",
  },
  {
    branchName: "hooks-table-drawer",
    args: "table,drawer",
    acronym: "td",
    description: "table + 分页 + 新建/编辑抽屉",
  },
  {
    branchName: "hooks-table-drawer-detail",
    args: "table,drawer,detail",
    acronym: "tdd",
    description: "table + 分页 + 新建/编抽屉 + 详情页",
  },
];

let result = {};
for (let index in reactDict) {
  const { args, acronym, description } = reactDict[index];
  const key = `${acronym}|${args}`;
  result[key] = description;
}
