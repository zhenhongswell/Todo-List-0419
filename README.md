# Todo-List-0419

liststate 陣列
liststate 每個 element:
{
inputText: ,
checked: ,
}

當網頁開啟時,loadstate 載入資料至 liststate,根據 liststate 創建元件。

主要功能
-addItem:新增 li 並 appendchild 至,
push {
inputText: inputText,
checked: false,
}至 liststate,做 savestate.

-deleteItem:刪除 li,
從 liststate 中刪除,做 savestate.

-checkItem:勾選,li 中 toggle checked class,
並修改 liststate 中的 checked 狀態,
做 savestate.

note:
preventDefault 防止元件預設動作：防止 form 在表單送出後,刷新網頁。
listState = listState.filter((value, i)
-i:iteratorable 的 index
