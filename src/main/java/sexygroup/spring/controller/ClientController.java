package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.ClientService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/client")
@Api(tags = "客户")
public class ClientController extends BaseController<Client, ClientService> {
    @Autowired
    private ClientService clientService;

    @GetMapping("/findAllDetail")
    @ApiOperation(value = "查询所有（包含客户和图片信息）", notes = "return List")
    public List<JSONObject> findAllDetail() {
        return clientService.findAllDetail();
    }

    //通过图片信息查
    @GetMapping("/findByImageId")
    @ApiOperation(value = "通过图片id查（包含客户和图片信息）", notes = "return JSON")
    public Optional<JSONObject> findByImageId(Integer id) {
        return Optional.ofNullable(clientService.findByImageId(id));
    }

    @GetMapping("/findByImageDateBetween")
    @ApiOperation(value = "通过图片上传时间段查（包含客户和图片信息）", notes = "return List")
    public List<JSONObject> findByImageDateBetween(String startTime, String endTime) {
        return clientService.findByImageDateBetween(startTime, endTime);
    }

    //通过客户信息查
    @GetMapping("/findByClientId")
    @ApiOperation(value = "通过客户id查所有图片信息（包含客户和图片信息）", notes = "return List")
    public List<JSONObject> findByClientId(Integer id) {
        return clientService.findByClientId(id);
    }

    @GetMapping("/findByClientName")
    @ApiOperation(value = "通过客户名称查所有图片信息（模糊查询）（包含客户和图片信息）", notes = "return List")
    public List<JSONObject> findByClientName(String name) {
        return clientService.findByClientName(name);
    }

    @GetMapping("/findByClientPhone")
    @ApiOperation(value = "通过客户手机号查（包含客户和图片信息）", notes = "return List")
    public List<JSONObject> findByClientPhone(String phone) {
        return clientService.findByClientPhone(phone);
    }

    //查头像
    @GetMapping("/findProfileByClientId")
    @ApiOperation(value = "通过客户id查询客户头像(包含客户和图片信息)", notes = "return JSON")
    public Optional<JSONObject> findProfileByClientId(Integer id) {
        return Optional.ofNullable(clientService.findProfileByClientId(id));
    }

    @GetMapping("/findAllProfileByCardId")
    @ApiOperation(value = "通过卡id查卡下所有客户的头像(包含客户和图片信息)", notes = "return List")
    public List<JSONObject> findAllProfileByCardId(Integer id) {
        return clientService.findAllProfileByCardId(id);
    }

    @GetMapping("/deleteClient")
    @ApiOperation(value = "通过客户id删除客户及其图片", notes = "return boolean")
    public Boolean deleteClient(HttpServletRequest request, Integer clientId) {
        //获取文件保存路径
        String fileDir = request.getSession().getServletContext().getRealPath("/") + "upload/";
        return clientService.deleteClient(clientId, fileDir);
    }

    @GetMapping("/findByClientAge")
    @ApiOperation(value = "通过客户年龄查（包含客户和图片信息）", notes = "return List")
    public List<JSONObject> findByClientAge(String age) {
        return clientService.findByClientAge(age);
    }
}
