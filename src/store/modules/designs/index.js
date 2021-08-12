import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default{
    namespaced:true,
    state(){
        return {
            portfolios:[],
            currencySign:'$',
            slides: [
                {
                  title: "",
                  content: "",
                  colors: "#EF4444",
                  image:
                    "https://www.e-architect.com/images/jpgs/australia/lubelso-concept-home-c200813-s3.jpg",
                },
                {
                  title: "",
                  content: "",
                  colors: "#60A5FA",
                  image:
                    "https://mydecorative.com/wp-content/uploads/2021/04/interior-design-for-student-room.jpg",
                },
                {
                  title: "",
                  content: "",
                  colors: "#FDE68A",
                  image: "https://cdn.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg",
                },
              ],
              
            designs: [
              {
                title: "lorem ipsum drem dum dum...",
                image: "https://picsum.photos/200/200",
                price:'200',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                request_status:"Pending",
                request_date:"07/8/2021",
                proposal_status:false
              },
              {
                title: "lorem ipsum drem dum dum...",
                image: "https://picsum.photos/200/200",
                price:'500',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                request_status:"Accepted",
                request_date:"07/8/2021",
                proposal_status:true
              },
              {
                title: "lorem ipsum drem dum dum...",
                image: "https://picsum.photos/200/200",
                price:'7000',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                request_status:"Accepted",
                request_date:"07/8/2021",
                proposal_status:true
              },
              {
                title: "lorem ipsum drem dum dum...",
                image: "https://picsum.photos/200/200",
                price:'80000',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                request_status:"Declined",
                request_date:"07/8/2021",
                proposal_status:true
              },
            ],
        }
    },
    mutations,
    actions,
    getters
}