window.onload = function () {
    v1 = new Vue({
        el: '#app',
        data: {
            url: "http://127.0.0.1:8080/spring/",
            //url: "http://10.236.235.240:8081/spring/",
            activeName: "info",

            staff: {
                staffId: 0,
                staffQuestion: '',
                staffAnswer: '',
                staffPassword: '',
                staffIsAdmin: 0,
                staffName: '',
                staffPhone: '',
                staffLogin: 0
            },
            staffForm: {
                staffCode: '',
                staffName: '',
                staffPhone: '',
                oldPassword: '',
                newPassword: '',
                againPassword: ''
            },

            cardLevel: {
                cardLevelId: 0,
                cardLevelPrice: ''
            },
            cardLevels: [],
            c_currentPage: 1,
            c_pagesize: 5,
            c_totalCount: 0,


            service: {
                serviceId: '',
                serviceName: '',
                servicePrice: 0.00,
                serviceRebate: 0.00
            },
            services: [],
            s_currentPage: 1,
            s_pagesize: 5,
            s_totalCount: 0,


            addDialogFormVisible_1: false,
            editDialogFormVisible_1: false,
            addDialogFormVisible_2: false,
            editDialogFormVisible_2: false,
            editDialogFormVisible_3: false,

            //表单验证规则
            rules: {
                cardLevelPrice: [
                    {required: true, message: '请输入充值金额', trigger: 'blur'},
                    {
                        pattern: /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/,
                        message: '格式为100或100.0或100.00形式',
                        trigger: 'blur'
                    }
                ],
                serviceName: [
                    {required: true, message: '请输入服务项目名称', trigger: 'blur'}
                ],
                servicePrice: [
                    {required: true, message: '请输入服务项目金额', trigger: 'blur'},
                    {
                        pattern: /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/,
                        message: '格式为100或100.0或100.00形式',
                        trigger: 'blur'
                    }
                ],
                serviceRebate: [
                    {required: true, message: '请输入返利折扣', trigger: 'blur'},
                    {pattern: /(^1(\.0{1,2})?$)|(^0(\.\d{1,2})?$)/, message: '返利折扣在0-1之间，且小数点后最多两位', trigger: 'blur'}
                ],
                oldPassword: [
                    {required: true, message: '请输入旧密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '密码长度为6-20位', trigger: 'blur'}
                ],
                newPassword: [
                    {required: true, message: '请输入新密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '密码长度为6-20位', trigger: 'blur'}
                ],
                againPassword: [
                    {required: true, message: '请再次输入新密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '密码长度为6-20位', trigger: 'blur'}
                ]
            }

        },
        methods: {
            //========================== page common =========================================
            //工具栏(侧栏)响应函数
            select_one: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "work.html" + "?" + t_code;
            },
            select_two: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "info_analyse.html" + "?" + t_code;
            },
            select_three: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "card_info.html" + "?" + t_code;
            },
            select_four: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "client_info.html" + "?" + t_code;
            },
            select_five: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "image_info.html" + "?" + t_code;
            },
            select_six: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "staff_info.html" + "?" + t_code;
            },
            select_seven: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_consume_analyse.html" + "?" + t_code;
            },
            select_eight: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_rebate_analyse.html" + "?" + t_code;
            },
            select_nine: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_recharge_analyse.html" + "?" + t_code;
            },
            select_ten: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_cost_analyse.html" + "?" + t_code;
            },
            select_eleven: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "deal_record.html" + "?" + t_code;
            },
            select_twelve: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "set.html" + "?" + t_code;
            },

            //"退出系统"响应函数
            exit: function () {
                //将退出标识由1变为0
                this.staff.staffLogin = 0;
                //数据上传到后台
                var handle = this;	//供axios使用外层this
                axios.post(this.url + "staff/save", {
                    staffId: this.staff.staffId,
                    staffQuestion: this.staff.staffQuestion,
                    staffAnswer: this.staff.staffAnswer,
                    staffIsAdmin: this.staff.staffIsAdmin,
                    staffName: this.staff.staffName,
                    staffPhone: this.staff.staffPhone,
                    staffPassword: this.staff.staffPassword,
                    staffLogin: this.staff.staffLogin
                }).then(function (response) {
                    //响应处理
                    if (handle.staff.staffId == response.data.staffId) {
                        console.log("saveStuff Success");
                        //清空表单
                        window.location.href = "login.html";
                    } else {
                        handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                        });
                        console.log("saveStuff defeat");
                    }
                }).catch(function (error) {
                    console.log(error);
                    handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                    });
                });
            },

            //========================== common ======================================
            //初始化staff
            init_staff: function () {
                var t_staff = {};
                t_staff.staffId = 0;
                t_staff.staffQuestion = '';
                t_staff.staffAnswer = '';
                t_staff.staffPassword = '';
                t_staff.staffIsAdmin = 0;
                t_staff.staffName = '';
                t_staff.staffPhone = '';
                t_staff.staffLogin = 0;
                return t_staff;
            },

            //初始化staffForm
            init_staffForm: function () {
                var t_staffForm = {};
                t_staffForm.staffCode = '';
                t_staffForm.staffName = '';
                t_staffForm.staffPhone = '';
                t_staffForm.oldPassword = '';
                t_staffForm.newPassword = '';
                t_staffForm.againPassword = '';
                return t_staffForm;
            },
            //初始化cardLevel
            init_cardLevel: function () {
                var t_cardLevel = {};
                t_cardLevel.cardLevelId = 0;
                t_cardLevel.cardLevelPrice = '';
                return t_cardLevel;
            },
            //初始化service
            init_service: function () {
                var t_service = {};
                t_service.serviceId = 0;
                t_service.serviceName = '';
                t_service.servicePrice = 0.00;
                t_service.serviceRebate = 0.00;
                return t_service;
            },

            //int型id转化为6位string型code。失败返回字符串”error“。
            idToCode6: function (t_id) {
                var response = "";
                var count = t_id.toString().length;

                if (count == 1) {
                    response = "00000" + t_id.toString();
                } else if (count == 2) {
                    response = "0000" + t_id.toString();
                } else if (count == 3) {
                    response = "000" + t_id.toString();
                } else if (count == 4) {
                    response = "00" + t_id.toString();
                } else if (count == 5) {
                    response = "0" + t_id.toString();
                } else if (count == 6) {
                    response = t_id.toString();
                } else {
                    response = "error";
                }
                return response;
            },

            //6位string型code转化为int型id。失败返回NaN。
            codeToId6: function (t_code) {
                var response = parseInt(t_code, 10);
                return response;
            },

            //cardLevel表格相关
            c_handleSizeChange: function (pagesize) {
                this.c_pagesize = pagesize;
            },
            c_handleCurrentChange: function (currentPage) {
                this.c_currentPage = currentPage;
            },

            //service表格相关
            s_handleSizeChange: function (pagesize) {
                this.s_pagesize = pagesize;
            },
            s_handleCurrentChange: function (currentPage) {
                this.s_currentPage = currentPage;
            },
            //========================== 后台交互 ======================================
            //账户信息：通过编号获取管理员信息。
            findStaffById: function (t_id) {
                var handle = this;
                axios.get(this.url + "staff/findById", {
                    params: {
                        id: t_id
                    }
                }).then(function (response) {
                    //console.log(response.data);		//测试代码
                    if (response.data == null) {
                        handle.$alert("没有该管理员信息!").catch(() => {
                        });
                        console.log("can't find from server!!");
                    } else {
                        handle.staff.staffId = response.data.staffId;
                        handle.staff.staffQuestion = response.data.staffQuestion;
                        handle.staff.staffAnswer = response.data.staffAnswer;
                        handle.staff.staffPassword = response.data.staffPassword;
                        handle.staff.staffIsAdmin = response.data.staffIsAdmin;
                        handle.staff.staffName = response.data.staffName;
                        handle.staff.staffPhone = response.data.staffPhone;
                        handle.staff.staffLogin = response.data.staffLogin;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //账户信息：更新管理员信息。用于修改管理员密码、修改登录标识位。
            saveStaff: function (t_staff) {
                var handle = this; //供axios使用外层this
                axios.post(this.url + "staff/save", {
                    staffId: t_staff.staffId,
                    staffQuestion: t_staff.staffQuestion,
                    staffAnswer: t_staff.staffAnswer,
                    staffPassword: t_staff.staffPassword,
                    staffIsAdmin: t_staff.staffIsAdmin,
                    staffName: t_staff.staffName,
                    staffPhone: t_staff.staffPhone,
                    staffLogin: t_staff.staffLogin
                }).then(function (response) {
                    //业务处理
                    //console.log(response.data);		//测试代码
                    if (t_staff.staffId == response.data.staffId) {
                        handle.$alert("修改成功!").catch(() => {
                        });
                        console.log("saveStaff Success");
                    } else {
                        handle.$alert("修改失败!").catch(() => {
                        });
                        console.log("saveStaff defeat");
                        return false;
                    }
                    handle.loading();
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //会员卡等级设置：获取所有cardLevel信息。
            findAllCardLevel: function () {
                var handle = this;
                axios.get(this.url + "cardLevel/findAll", {
                    params: {}
                }).then(function (response) {
                    //业务处理
                    //console.log(response.data);					//测试代码
                    if (response.data == null) {
                        handle.$alert("获取会员卡信息失败!").catch(() => {
                        });
                        console.log("getCardLevels Error!");
                    } else {
                        handle.cardLevels = response.data;
                        handle.c_totalCount = handle.cardLevels.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //会员卡等级设置：新增或修改会员卡信息。
            saveCardLevel: function (t_cardLevel) {
                var handle = this;
                axios.post(this.url + "cardLevel/save", {
                    cardLevelId: t_cardLevel.cardLevelId,
                    cardLevelPrice: t_cardLevel.cardLevelPrice,
                }).then(function (response) {
                    //业务处理
                    //console.log(response.data);
                    if (t_cardLevel.cardLevelPrice == response.data.cardLevelPrice) {
                        handle.$alert("操作成功!").catch(() => {
                        });
                        console.log("saveCardLevel Success");
                    } else {
                        handle.$alert("操作失败!").catch(() => {
                        });
                        console.log("saveCardLevel defeat");
                        return false;
                    }
                    handle.loading();
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //会员卡等级设置：通过编号删除会员卡等级信息
            deleteCardLevel: function (t_cardLevelId) {
                var handle = this;
                axios.get(this.url + "cardLevel/deleteById?id=" + t_cardLevelId).then(function (response) {
                    //业务处理
                    console.log(response.data);
                    if (response.data != true) {
                        handle.$alert("删除失败!").catch(() => {
                        });
                        console.log("deleteCardLevel defeat");
                        return false;
                    } else {
                        handle.$alert("删除成功!").catch(() => {
                        });
                        console.log("deleteCardLevel Success");
                    }
                    handle.loading();
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //服务项目设置：获取所有服务项目信息。
            findAllService: function () {
                //获取后台数据
                handle = this;
                axios.get(this.url + "service/findAll", {
                    params: {}
                }).then(function (response) {
                    //业务处理
                    //console.log(response.data);					//测试代码
                    if (response.data == null) {
                        handle.$alert("获取服务项目信息失败!").catch(() => {
                        });
                        console.log("getServices Error!");
                    } else {
                        handle.services = response.data;
                        handle.s_totalCount = handle.services.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //服务项目设置：新增或修改服务项目信息。
            saveService: function (t_service) {
                //向后台上传数据
                var handle = this; //供axios使用外层this
                axios.post(this.url + "service/save", {
                    serviceId: t_service.serviceId,
                    serviceName: t_service.serviceName,
                    servicePrice: t_service.servicePrice,
                    serviceRebate: t_service.serviceRebate
                }).then(function (response) {
                    //业务处理
                    //console.log(response.data);
                    if (t_service.serviceName == response.data.serviceName) {
                        handle.$alert("操作成功!").catch(() => {
                        });
                        console.log("saveService Success");
                    } else {
                        handle.$alert("操作失败!").catch(() => {
                        });
                        console.log("saveService defeat");
                        return false;
                    }

                    handle.loading();
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //服务项目设置：通过编号删除服务项目
            deleteService: function (t_serviceId) {
                //向后台上传数据
                var handle = this;
                axios.get(this.url + "service/deleteById?id=" + t_serviceId).then(function (response) {
                    //业务处理
                    //console.log(response.data);
                    if (response.data != true) {
                        handle.$alert("删除失败!").catch(() => {
                        });
                        console.log("deleteService defeat");
                        return false;
                    } else {
                        handle.$alert("删除成功!").catch(() => {
                        });
                        console.log("deleteService Success");
                    }

                    handle.loading();
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //========================== 响应函数 =========================================
            //“登录页面”响应函数。
            loading: function () {
                this.staff = this.init_staff();
                this.staffForm = this.init_staffForm();
                this.cardLevel = this.init_cardLevel();
                this.service = this.init_service();
                this.staffForm.staffCode = window.location.href.split("?")[1];	//从网址获取code

                var t_id = this.codeToId6(this.staffForm.staffCode);
                this.findStaffById(t_id);

                this.findAllCardLevel();

                this.findAllService();

                var handle = this;
                window.setTimeout(function () {

                    if (handle.staff.staffId == 0 || handle.staff.staffIsAdmin == 0 || handle.staff.staffLogin == 0) {
                        window.location.href = "login.html";
                    }

                    handle.staffForm.staffName = handle.staff.staffName;
                    handle.staffForm.staffPhone = handle.staff.staffPhone;
                }, 400);
            },

            //-------------------------会员卡等级设置响应函数-----------------------------
            clickDeleteButton_1: function (t_cardLevelId) {
                this.$confirm('确定要删除吗?', '提示').then(() => {
                    this.deleteCardLevel(t_cardLevelId);
                }).catch(() => {
                });
            },

            clickAddButton_1: function () {
                this.cardLevel.cardLevelPrice = 0.00;
                this.addDialogFormVisible_1 = true;
            },

            resetAddForm_1: function (formName) {
                this.addDialogFormVisible_1 = false;
                this.$refs[formName].resetFields();
            },

            addForm_1: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.cardLevel.cardLevelId = null;
                        this.saveCardLevel(this.cardLevel);
                        //this.$alert("提交成功").catch(() => {});
                        console.log("submit success!");
                        this.addDialogFormVisible_1 = false;
                    } else {
                        return false;
                    }
                });
            },

            clickEditButton_1: function (t_cardLevel) {
                this.cardLevel.cardLevelId = t_cardLevel.cardLevelId;
                this.cardLevel.cardLevelPrice = t_cardLevel.cardLevelPrice;

                this.editDialogFormVisible_1 = true;
            },

            resetEditForm_1: function (formName) {
                this.editDialogFormVisible_1 = false;
                this.$refs[formName].resetFields();
            },

            editForm_1: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.saveCardLevel(this.cardLevel);
                        //this.$alert("提交成功").catch(() => {});
                        console.log("submit success!");
                        this.editDialogFormVisible_1 = false;

                    } else {
                        return false;
                    }
                });
            },

            //-------------------------服务项目设置响应函数-----------------------------
            clickDeleteButton_2: function (t_serviceId) {
                this.$confirm('确定要删除吗?', '提示').then(() => {
                    this.deleteService(t_serviceId);
                }).catch(() => {
                });
            },

            clickAddButton_2: function () {
                this.service.serviceName = '';
                this.service.servicePrice = 0.00;
                this.service.serviceRebate = 0.00;

                this.addDialogFormVisible_2 = true;
            },

            resetAddForm_2: function (formName) {
                this.addDialogFormVisible_2 = false;
                this.$refs[formName].resetFields();
            },

            addForm_2: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //业务处理
                        this.service.serviceId = null;
                        this.saveService(this.service);
                        //this.$alert("提交成功").catch(() => {});
                        console.log("submit success!");
                        this.addDialogFormVisible_2 = false;
                    } else {
                        return false;
                    }
                });
            },

            clickEditButton_2: function (t_service) {
                this.service.serviceId = t_service.serviceId;
                this.service.serviceName = t_service.serviceName;
                this.service.servicePrice = t_service.servicePrice;
                this.service.serviceRebate = t_service.serviceRebate;

                this.editDialogFormVisible_2 = true;
            },

            resetEditForm_2: function (formName) {
                this.editDialogFormVisible_2 = false;
                this.$refs[formName].resetFields();
            },

            editForm_2: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //业务处理
                        this.saveService(this.service);
                        //this.$alert("提交成功").catch(() => {});
                        console.log("submit success!");
                        this.editDialogFormVisible_2 = false;
                    } else {
                        return false;
                    }
                });
            },

            //-------------------------账户信息响应函数-----------------------------
            clickEditButton_3: function () {
                this.staffForm.oldPassword = '';
                this.staffForm.newPassword = '';
                this.staffForm.againPassword = '';

                this.editDialogFormVisible_3 = true;
            },

            resetEditForm_3: function (formName) {
                this.editDialogFormVisible_3 = false;
                this.$refs[formName].resetFields();
            },

            editForm_3: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //业务处理
                        if (this.staffForm.newPassword != this.staffForm.againPassword) {
                            this.$alert("两次输入密码不一致！").catch(() => {
                            });
                            console.log("password and password2 is not equit!");
                            return false;
                        } else if (this.staffForm.oldPassword != this.staff.staffPassword) {
                            this.$alert("旧密码不正确！").catch(() => {
                            });
                            console.log("oldPasswrod is not right!");
                            return false;
                        } else {
                            this.staff.staffPassword = this.staffForm.newPassword;
                            this.saveStaff(this.staff);
                            //this.$alert("提交成功").catch(() => {});
                            console.log("submit success!");
                            this.editDialogFormVisible_3 = false;
                        }
                    } else {
                        return false;
                    }
                });
            }


        }
    });
    v1.loading();
}