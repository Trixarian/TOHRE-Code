import comp from "C:/Users/moebs/OneDrive/Bureau/Dev Tools/Among Us/Vuepress Site TOHE/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Home\",\"home\":true,\"heroImage\":\"https://i.ibb.co/8NtHzhP/TOHE.png\",\"heroHeight\":165,\"heroText\":null,\"tagline\":null,\"actions\":[{\"text\":\"Role Info\",\"link\":\"/Roles.html\",\"type\":\"secondary\"},{\"text\":\"Install Now!\",\"link\":\"/GetStarted.html\",\"type\":\"primary\"},{\"text\":\"FAQ\",\"link\":\"/FAQ.html\",\"type\":\"secondary\"}],\"footer\":\"© 2023 By Town of Host: Enhanced\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
