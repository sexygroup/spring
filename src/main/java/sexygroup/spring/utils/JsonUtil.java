package sexygroup.spring.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class JsonUtil {

    public static void main(String[] args) {
        String str = "{'user_name':'o,k','user_sex':0," +
                "'object_info':{'business_code':'0001','object_info2':{'object_1':'ok'}}}";
        String str2 = "[{'object_info':{'business_code':'ok'}},{'user_name':'o,k','user_sex':0," +
                "'object_info':{'business_code':'0001','object_info2':{'object_1':'o_k'}}}]";
        String str3 = null;

        List jsonArray=new ArrayList();
        JSONObject jsonObject=new JSONObject();
        jsonObject.put("my_name",1);
        jsonArray.add(jsonObject);
        jsonObject.put("my_money",2);
        jsonArray.add(jsonObject);
        System.out.println(convertList(jsonArray));
    }


    /**
     * json key下划线转驼峰(递归)
     * 输入变量json字符串
     * @param json
     * @return
     */
    public static Object convert(String json) {
        Object obj = JSON.parse(json);
        convert(obj);
        return obj;
    }

    /**
     * json key下划线转驼峰(递归)
     * 输入变量List<JSONObject>
     * @param list
     * @return
     */
    public static List<JSONObject> convertList(List<JSONObject> list){
        JSONArray jsonArray= (JSONArray) JSONArray.toJSON(list);
        convert(jsonArray);
        return jsonArray.toJavaList(JSONObject.class);
    }

    /**
     * json key下划线转驼峰(递归)
     * 输入变量JSONArray
     * @param jsonArray
     * @return
     */
    public static JSONArray convertJSONArray(JSONArray jsonArray){
        convert(jsonArray);
        return jsonArray;
    }

    /**
     * json key下划线转驼峰(递归)
     * 输入变量JSONObject
     * @param jsonObject
     * @return
     */
    public static JSONObject convertJSONObject(JSONObject jsonObject){
        convert(jsonObject);
        return jsonObject;
    }

    /**
     * json key下划线转驼峰(递归) 核心代码
     * @param json
     */
    public static void convert(Object json) {
        if (json instanceof JSONArray) {
            JSONArray arr = (JSONArray) json;
            for (Object obj : arr) {
                convert(obj);
            }
        } else if (json instanceof JSONObject) {
            JSONObject jo = (JSONObject) json;
            Set<String> keys = jo.keySet();
            String[] array = keys.toArray(new String[keys.size()]);
            for (String key : array) {
                Object value = jo.get(key);
                String[] key_strs = key.split("_");
                if (key_strs.length > 1) {
                    StringBuilder sb = new StringBuilder();
                    for (int i = 0; i < key_strs.length; i++) {
                        String ks = key_strs[i];
                        if (!"".equals(ks)) {
                            if (i == 0) {
                                sb.append(ks);
                            } else {
                                int c = ks.charAt(0);
                                if (c >= 97 && c <= 122) {
                                    int v = c - 32;
                                    sb.append((char) v);
                                    if (ks.length() > 1) {
                                        sb.append(ks.substring(1));
                                    }
                                } else {
                                    sb.append(ks);
                                }
                            }
                        }
                    }
                    jo.remove(key);
                    jo.put(sb.toString(), value);
                }
                convert(value);
            }
        }
    }
}
