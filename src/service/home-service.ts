import query from "@/db";
export default class HomeService {
  hello = async () => {
    const res = await query("SELECT *  FROM emp");
    return res;
  };
}
