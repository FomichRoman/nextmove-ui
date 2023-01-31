import { rootAction } from "@/redux/actions";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(rootAction, dispatch)
}