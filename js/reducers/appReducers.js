import * as types from '../constants/actions';


//our state
const initialState = {
  clusterList: [],
  totalCluster: 0,
  pods: [],
  totalPods: 0,
  accessKeyId: ``,
  secretAccessKey: ``,
};


const appReducer = (state = initialState, action) => {
  let clusterName;
  let totalCluster;

  switch (action.type) {
    case types.ADD_APITOKEN:
      accessKeyId = action.payload.accessKeyId;
      secretAccessKey = action.payload.secretAccessKey;

      return {
        ...state,
        accessKeyId,
        secretAccessKey,
      };
    case types.ADD_CLUSTER:

      totalCluster = state.totalCluster + 1;
      clusterName = action.payload.clusterName;


      const newCluster = {

        clusterName: clusterName,
        totalCluster: state.totalCluster,
      };


      clusterList = state.clusterList.slice();
      clusterList.push(newCluster);


      return {
        ...state,
        clusterList,
        totalCluster,
        clusterName: '',
      };


    default:
      return state;
  }
};

export default appReducer;