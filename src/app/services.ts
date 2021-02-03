import { webSocket } from "rxjs/webSocket";

export const socket_subject  = webSocket("ws://localhost:9000");

export const user_data = {
  login_status:"",
  product_status:""

}
