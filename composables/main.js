export const useStore = definePiniaStore("main", {
  state: () => {
    return {
      userInfo: {},
    };
  },
  persist: true, // 开启持久化
});
