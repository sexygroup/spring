window.onload = function () {
    v1 = new Vue({
        el: '#app',
        data: {
            admin: {
                adminId: 1,
                adminPassword: ''
            },
            adminCode: '',		//admin.id对应的6位编号

            //---------------客户会员卡联合查询-------------------
            cardClientDetail: {},
            findByClientCode: '',
            findByClientName: '',
            findByClientAge: '',
            findByClientPhone: '',
            cardClientDetails: [],
            currentPage: 1,		//批量显示表格的当前页
            pagesize: 10,				//批量显示表格的分页大小
            totalCount: 0,			//批量显示表格的总记录数

            leng: 0,

            staff1: {
                staffId: 0,
                staffQuestion: '',
                staffAnswer: '',
                staffPassword: '',
                staffIsAdmin: 0,
                staffName: '',
                staffPhone: '',
                staffLogin: 0
            },

            cardClientForm: {
                cardCode: '',
                clientCode: '',
                clientName: '',
                clientPhone: ''
            },
            ages: ["儿童", "青年", "中年", "老年"],

            editDialogFormVisible: false,	//编辑客户信息对话框是否可见
            //-------------------------------------------
            //url:"http://127.0.0.1:8080/spring9/"
            //url:"http://10.241.77.73:9876/"
            url: "http://127.0.0.1:8080/spring/"
        },
        methods: {
            //=======================================================================


            //初始化cardClientForm
            init_cardClientForm: function () {
                this.cardClientForm.cardCode = '';
                this.cardClientForm.clientCode = '';
                this.cardClientForm.clientName = '';
                this.cardClientForm.clientPhone = '';
            },

            setage: function (age) {
                this.findByClientAge = age;
            },


            //int型id转化为6位string型code。失败返回字符串”error“。
            idToCode: function (t_id) {
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
            codeToId: function (t_code) {
                var response = parseInt(t_code, 10);
                return response;
            },

            //将推荐人id转化为页面显示。若存在则转化为code，若不存在则显示"无"。
            referrerToShow: function (t__referrer) {
                if (t__referrer == null) {
                    return "无";
                } else {
                    return this.idToCode(t__referrer);
                }
            },

            //将“性别”转化为页面显示。若为1则转化为“男”，若为0则转化为“女”。
            genderToShow: function (t_gender) {
                if (t_gender == "1") {
                    return "男";
                } else {
                    return "女";
                }
            },

            //将"是否持有"转化为页面显示。若为1则转化为"是"，若为0则转化为"否"。
            sharedToShow: function (t__is_shared) {
                if (t__is_shared == "1") {
                    return "是";
                } else {
                    return "否";
                }
            },

            //将"是否共享"转化为页面显示。若为1则转化为"是"，若为0则转化为"否"。
            holderToShow: function (t_is_holder) {
                if (t_is_holder == "1") {
                    return "是";
                } else {
                    return "否";
                }
            },

            //cardClientDetail表格相关
            handleSizeChange: function (pagesize) {
                this.pagesize = pagesize;
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage;
            },

            //=======================================================================
            //获取所有cardClientDetail信息。若数据库存在记录，则将返回结果保存到cardClientDetails[]。
            findAllCardClientDetail: function () {
                handle = this;	//供axios使用外层this
                axios.get(this.url + "client/findAll").then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data == null) {
                        handle.$alert("获取客户信息失败!");
                        //console.log("findAllCardClientDetail Error!");
                    } else {
                        handle.leng = response.data.length;
                        handle.cardClientDetails = response.data;
                        //console.log(handle.cardClientDetails);
                        handle.totalCount = handle.cardClientDetails.length;
                    }
                }).catch(function (error) {
                    //console.log(error);
                });
            },


            //通过客户姓名获取信息。若数据库存在记录，则将返回结果保存到对应数组中。
            c_findByClientName: function (t_name) {
                //console.log(t_name);
                var handle = this;	//供axios使用外层this
                axios.get(this.url + "client/findByClientName", {
                    params: {
                        name: t_name
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的信息!");
                        //console.log("c_findByClientName Error!");
                    } else {
                        //初始化cardClientDetails
                        while (handle.cardClientDetails.length != 0) {
                            handle.cardClientDetails.pop();
                        }
                        //将新结果保存到cardClientDetails
                        for (var i = 0; i < response.data.length; i++) {
                            handle.cardClientDetails.push(response.data[i]);
                        }
                        handle.totalCount = handle.cardClientDetails.length;
                    }
                }).catch(function (error) {
                    //console.log(error);
                });
            },

            //通过编号获取信息。若数据库存在记录，则将返回结果保存到对应数组中。
            c_findByClientAge: function (t_age) {
                //console.log(t_id);
                var handle = this;	//供axios使用外层this
                axios.get(this.url + "client/findByClientAge", {
                    params: {
                        age: t_age
                    }
                }).then(function (response) {
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的信息!");
                    } else {
                        //初始化cardClientDetails
                        while (handle.cardClientDetails.length != 0) {
                            handle.cardClientDetails.pop();
                        }
                        //将新结果保存到cardClientDetails
                        for (var i = 0; i < response.data.length; i++) {
                            handle.cardClientDetails.push(response.data[i]);
                        }
                        handle.totalCount = handle.cardClientDetails.length;
                    }
                }).catch(function (error) {
                    //console.log(error);
                });
            },


            //修改信息。用于找回密码和是否共享
            c_saveCardClient: function (t_cardClient) {
                //console.log(t_cardClient);		//测试语句
                var handle = this;	//供axios使用外层this
                axios.post(this.url + "client/save", t_cardClient).then(function (response) {
                    //console.log(response.data);
                    //响应处理
                    if (t_cardClient.clientId == response.data.clientId) {
                        handle.$alert("修改成功!");
                        //console.log("c_saveCardClient Success");
                    } else {
                        handle.$alert("修改失败!");
                        //console.log("c_saveCardClient defeat");
                    }
                    //刷新页面，即页面复原。
                    handle.loading();
                }).catch(function (error) {
                    //console.log(error);
                });
            },

            //======================================================================
            fresh: function () {
                window.location.reload();
            },
            //“登录页面”响应函数。初始化数据。
            loading: function () {
                //初始化信息
                this.staff = this.init_staff();
                var t_staffCode = window.location.href.split("?")[1];	//从网址获取code


                //与后台交互，通过t_staffCode查询 staff信息；
                var t_id = this.codeToId(t_staffCode);
                this.findStaffById(t_id);

                //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),400);
                var handle = this;	//供setTimeout()使用外层this
                window.setTimeout(function () {
                    //登录校验。无账号登录||非管理员账号登录||管理员登录标识位为0，则失败。
                    if (handle.staff1.staffId == 0 || handle.staff1.staffIsAdmin == 0 || handle.staff1.staffLogin == 0) {
                        window.location.href = "login.html";
                    }
                    handle.adminCode = window.location.href.split("=")[1];	//从网址获取code
                    //登录校验。判断是否正确登录。
                    /*if (handle.codeToId(handle.adminCode) != handle.admin.adminId) {
                        handle.$alert("非法登录！");
                       //console.log("getAdminCode error!");
                        return false;
                    }*/

                    //与后台交互，获取所有cardClientDetail信息；；
                    handle.findAllCardClientDetail();
                    //等待后台返回数据需要延迟一段200毫秒，用setTimeout(function(),200);
                    var handle1 = handle;		//供setTimeout()使用外层this1
                    window.setTimeout(function () {
                        //判断是否正成功获取数据
                    }, 100);
                }, 400);

            },

            //工具栏(侧栏)响应函数
            select_one: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "work.html" + "?" + t_code;
            },
            select_two: function () {
                var t_code = window.location.href.split("?")[1];
                window.location.href = "signup.html" + "?" + t_code;
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
                this.staff1.staffLogin = 0;
                //数据上传到后台
                var handle = this;	//供axios使用外层this
                axios.post(this.url + "staff/save", {
                    staffId: this.staff1.staffId,
                    staffQuestion: this.staff1.staffQuestion,
                    staffAnswer: this.staff1.staffAnswer,
                    staffIsAdmin: this.staff1.staffIsAdmin,
                    staffName: this.staff1.staffName,
                    staffPhone: this.staff1.staffPhone,
                    staffPassword: this.staff1.staffPassword,
                    staffLogin: this.staff1.staffLogin
                }).then(function (response) {
                    //响应处理
                    if (handle.staff1.staffId == response.data.staffId) {
                        //console.log("saveStuff Success");
                        //清空表单
                        window.location.href = "login.html";
                    } else {
                        handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                        });
                        //console.log("saveStuff defeat");
                    }
                }).catch(function (error) {
                    //console.log(error);
                    handle.$alert("退出系统异常! 为了您的账号安全，请连接网络后重新退出！").catch(() => {
                    });
                });
            },
            findStaffById: function (t_id) {
                //获取后台数据
                var handle = this; //供axios使用外层this
                axios.get(this.url + "staff/findById", {
                    params: {
                        id: t_id
                    }
                }).then(function (response) {
                    //业务处理
                    //console.log(response.data);		//测试代码
                    if (response.data == null) {
                        handle.$alert("没有该管理员信息!").catch(() => {
                        });
                        //console.log("can't find from server!!");
                    } else {
                        handle.staff1.staffId = response.data.staffId;
                        handle.staff1.staffQuestion = response.data.staffQuestion;
                        handle.staff1.staffAnswer = response.data.staffAnswer;
                        handle.staff1.staffPassword = response.data.staffPassword;
                        handle.staff1.staffIsAdmin = response.data.staffIsAdmin;
                        handle.staff1.staffName = response.data.staffName;
                        handle.staff1.staffPhone = response.data.staffPhone;
                        handle.staff1.staffLogin = response.data.staffLogin;
                    }
                }).catch(function (error) {
                    //console.log(error);
                });
            },


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
            //-----------------------------------------------------
            //”按会员卡编号查询“响应函数
            c__findByClientCode: function (t_cardCode) {

                var t_cardId = this.codeToId(t_cardCode);

                var handle = this;	//供axios使用外层this
                axios.get(this.url + "client/findById", {
                    params: {
                        id: t_cardId
                    }
                }).then(function (response) {
                    //测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的信息!");
                    } else {

                        //初始化cardClientDetails
                        while (handle.cardClientDetails.length != 0) {
                            handle.cardClientDetails.pop();
                        }
                        //将新结果保存到cardClientDetails
                        handle.cardClientDetails.push(response.data);


                        handle.totalCount = handle.cardClientDetails.length;
                    }
                }).catch(function (error) {
                    //console.log(error);
                });
            },

            //”按客户姓名查询“响应函数
            c__findByClientName: function (t_clientName) {
                if (t_clientName != '') {
                    this.c_findByClientName(t_clientName);
                } else {
                    handle.$alert("查询条件非法，请重新输入！");
                    //console.log("input error!");
                    return false;
                }
            },

            c__findByClientAge: function (t_clientAge) {
                if (t_clientAge != '') {
                    this.c_findByClientAge(t_clientAge);
                } else {
                    handle.$alert("查询条件非法，请重新输入！");
                    //console.log("input error!");
                    return false;
                }
            },


            //”修改“响应函数
            c__saveCardClient: function (t_cardClientForm) {
                this.cardClientDetail.clientPhone = t_cardClientForm.clientPhone;
                this.c_saveCardClient(this.cardClientDetail);
            },

            //”删除“按键响应函数
            c__deleteCardClient: function (t_client) {
                if (t_client.clientIsHolder == 1)
                    this.$alert("无法删除开卡人！");
                else {
                    if (confirm("确认删除？")) {
                        var handle = this;	//供axios使用外层this
                        axios.get(this.url + "client/deleteById?id=" + t_client.clientId
                        ).then(function (response) {
                            //console.log(response.data);
                            //响应处理
                            if (response.data != true) {
                                handle.$alert("删除失败!");
                                //console.log("c_deleteCardClient defeat");
                            } else {
                                handle.$alert("删除成功!");
                                //console.log("c_deleteCardClient Success");
                            }
                            //刷新页面，即页面复原。
                            handle.loading();
                        }).catch(function (error) {
                            //console.log(error);
                        });
                    }

                }

            },
            //-----------------------------------------------------
            //"修改按键"响应函数
            clickEditButton: function (t_cardClient) {
                //初始化
                //console.log('aa');
                this.init_cardClientForm();
                //赋值
                this.cardClientDetail = t_cardClient;
                this.cardClientForm.cardCode = this.idToCode(t_cardClient.cardId);
                this.cardClientForm.clientCode = this.idToCode(t_cardClient.clientId);
                this.cardClientForm.clientName = t_cardClient.clientName;
                this.cardClientForm.clientPhone = t_cardClient.clientPhone;
                this.editDialogFormVisible = true;
            },

            //编辑对话框左上角"×"号、以及对话框内“取消按键”响应函数
            resetEditForm: function (formName) {
                this.editDialogFormVisible = false;
                this.$refs[formName].resetFields();
            },

            //编辑对话框内“确认按键”响应函数
            editCardClient: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //判断输入手机号是否正确，若正确则与后台交互，更新数据。
                        if (this.cardClientForm.clientPhone.length != 11) {
                            this.$alert("手机号为11位数字！");
                            //console.log("card_phone is error！");
                            return false;
                        } else {
                            this.c__saveCardClient(this.cardClientForm);
                            //console.log("submit success!");
                        }
                    } else {
                        this.$alert("提交失败");
                        //console.log('error submit!!');
                        return false;
                    }
                });
                this.editDialogFormVisible = false;
            }
        }
    });
    v1.loading();
}