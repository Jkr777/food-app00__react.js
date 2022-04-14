

const INITIAL_STATE = {
  lista: [
    {
      nume:"bauturi",
      imgUrl: "https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },    
    {
      nume:"alimente de baza",
      imgUrl: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2083&q=80"
    },    
    {
      nume:"cafea si ceai",
      imgUrl: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80"
    },    
    {
      nume:"condimente",
      imgUrl: "https://images.unsplash.com/photo-1641296834707-bbe46429d945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
    },    
    {
      nume:"conserve si muraturi",
      imgUrl: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },    
    {
      nume:"produse din carne",
      imgUrl: "https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
    },  
    {
      nume:"peste",
      imgUrl: "https://images.unsplash.com/photo-1563557908-b7787229f123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },    
    {
      nume:"lactate",
      imgUrl: "https://images.unsplash.com/photo-1608634960479-c70cf0c3dece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },    
    {
      nume:"dulciuri",
      imgUrl: "https://images.unsplash.com/photo-1554405934-5d1bcf0cab68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
  ]
}

const categoriiReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriiReducer;