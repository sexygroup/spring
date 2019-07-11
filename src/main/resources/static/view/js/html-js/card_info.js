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
            findByCardCode: '',
            findByClientName: '',
            findByClientPhone: '',
            findByCardReferrer: '',
            cardClientDetails: [],
            currentPage: 1,		//批量显示表格的当前页
            pagesize: 10,				//批量显示表格的分页大小
            totalCount: 0,			//批量显示表格的总记录数
            leng: 0,

            cardClientForm: {
                cardAnswer: "",
                card_again_password: "",
                card_new_password: "",
            },
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
            editDialogFormVisible: false,	//编辑客户信息对话框是否可见
            //-------------------------------------------
            //url:"http://127.0.0.1:8080/spring9/"
            //url:"http://10.241.77.73:9876/"
            url: "http://127.0.0.1:8080/spring/",
            upload: "http://127.0.0.1:8080/spring/upload",

            rules: {

                card_new_password: [
                    {required: true, message: '请输入新密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '新密码长度为6-20位', trigger: 'blur'}
                ],

                card_again_password: [
                    {required: true, message: '请再次输入密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '新密码长度为6-20位', trigger: 'blur'}
                ],

                cardAnswer: [
                    {required: true, message: '请输入密保答案', trigger: 'blur'},

                ],

            }
        },
        methods: {
            //=======================================================================
            //初始化admin
            init_admin: function () {
                this.admin.adminId = 1;
                this.admin.adminPassword = '';
            },


            //初始化cardClientForm
            init_cardClientForm: function () {
                this.cardClientForm.cardAnswer = '';
                this.cardClientForm.card_again_password = '';
                this.cardClientForm.card_new_password = '';
            },

            fresh: function () {
                window.location.reload();
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
            codeToId: function (t_code) {
                var response = parseInt(t_code, 10);
                return response;
            },

            //将推荐人id转化为页面显示。若存在则转化为code，若不存在则显示"无"。
            referrerToShow: function (t__referrer) {
                if (t__referrer == null) {
                    return "无";
                } else {
                    return this.idToCode6(t__referrer);
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

            //检验字符串是否为空。response=0表示字符串为空。
            if_invalid: function (t_string) {
                var response = t_string.length;
                return response;
            },

            //cardClientDetail表格相关
            handleSizeChange: function (pagesize) {
                this.pagesize = pagesize;
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage;
            },

            //=======================================================================
            //获取所有cardClientHolderDetail信息。若数据库存在记录，则将返回结果保存到cardClientDetails[]。
            findAllCardClientDetail: function () {
                handle = this;	//供axios使用外层this
                axios.get(this.url + "card/findAllHolder", {
                    params: {}
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data == null) {
                        //handle.$alert("获取会员卡信息失败!");
                        //console.log("findAllCardClientDetail Error!");
                    } else {
                        handle.leng = response.data.length;
                        handle.cardClientDetails = response.data;
                        //console.log(handle.cardClientDetails);
                        //console.log(handle.cardClientDetails);
                        handle.totalCount = handle.cardClientDetails.length;
                    }
                }).catch(function (error) {
                    //console.log(error);
                });
            },

            //通过编号获取信息。若数据库存在记录，则将返回结果保存到对应数组中。
            c_findByCardCode: function (t_id) {
                //console.log(t_id);
                var handle = this;	//供axios使用外层this
                axios.get(this.url + "card/findById", {
                    params: {
                        id: t_id
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data == '') {
                        handle.$alert("没有符合条件的记录!");
                        //console.log("c_findByCardCode Error!");
                    } else {
                        //初始化costDetails
                        while (handle.cardClientDetails.length != 0) {
                            handle.cardClientDetails.pop();
                        }
                        //将新结果保存到costDetails
                        handle.cardClientDetails.push(response.data);
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
                axios.get(this.url + "card/findByHolderName", {
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

            //通过推荐人编号获取信息。若数据库存在记录，则将返回结果保存到对应数组中。
            c_findByCardReferrer: function (t_cardReferrer) {
                //console.log(t_cardReferrer);
                var handle = this;	//供axios使用外层this
                axios.get(this.url + "card/findByReferrer", {
                    params: {
                        id: t_cardReferrer
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的信息!");
                        //console.log("c_findByCardReferrer Error!");
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
                axios.post(this.url + "card/save", {
                    cardId: t_cardClient.cardId,
                    cardQuestion: t_cardClient.cardQuestion,
                    cardAnswer: t_cardClient.cardAnswer,
                    cardPassword: t_cardClient.cardPassword,
                    cardReferrer: t_cardClient.cardReferrer,
                    cardMoney: t_cardClient.cardMoney,
                    cardPoint: t_cardClient.cardPoint
                }).then(function (response) {
                    //console.log(response.data);
                    //响应处理
                    if (t_cardClient.cardId == response.data.cardId) {
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
                    handle.init_cardClientForm();

                    //console.log('aa');

                    //与后台交互，获取所有cardClientDetail信息；；
                    handle.findAllCardClientDetail();

                    //等待后台返回数据需要延迟一段200毫秒，用setTimeout(function(),200);
                    var handle1 = handle;		//供setTimeout()使用外层handle1

                    window.setTimeout(function () {
                        //判断是否正成功获取数据
                    }, 100);
                }, 400);

            },

            //========================== page common =========================================
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
            c__findByCardCode: function (t_cardCode) {
                //this.$alert("查询测试！");
                //console.log(t_cardCode);
                var t_cardId = this.codeToId(t_cardCode);
                this.c_findByCardCode(t_cardId);
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

            //”按推荐人卡编号查询“响应函数
            c__findByCardReferrer: function (t_cardReferrer) {
                if (t_cardReferrer.length != 6) {
                    handle.$alert("查询条件非法，请重新输入！");
                    //console.log("input error!");
                    return false;
                }
                var t_cardReferrerId = this.codeToId(t_cardReferrer);
                this.c_findByCardReferrer(t_cardReferrerId);
            },

            //”修改“响应函数
            c__saveCardClient: function (t_cardClientForm) {
                //if(t_cardClientForm.card_show_shared=="是"){
                //	this.cardClientDetail.card_is_shared="1";
                //}else if(t_cardClientForm.card_show_shared=="否"){
                //	this.cardClientDetail.card_is_shared="0";
                //}else{
                // 	this.cardClientDetail.card_is_shared= null;
                //}
                this.cardClientDetail.cardPassword = t_cardClientForm.card_new_password;
                this.c_saveCardClient(this.cardClientDetail);
            },

            //”删除“按键响应函数
            c__deleteCardClient: function (t_cardId) {
                var handle = this;	//供axios使用外层this
                if (confirm("确认删除？")) {
                    axios.get(this.url + "client/deleteById?id=" + t_cardId
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

            },
            //===========================================================================
            //"修改按键"响应函数
            clickEditButton: function (t_cardClient) {
                //初始化

                //this.init_cardClientForm();

                //赋值
                this.cardClientDetail = t_cardClient;
                this.cardClientForm.cardCode = this.idToCode6(t_cardClient.cardId);
                this.cardClientForm.cardQuestion = t_cardClient.cardQuestion;

                //if(t_cardClient.card_is_shared!=null){
                //	if(t_cardClient.card_is_shared == '1'){
                //		this.cardClientForm.card_show_shared="是";
                //	}else{
                //		this.cardClientForm.card_show_shared="否";
                //	}
                //}else{
                //	this.cardClientForm.card_show_shared='';
                //}

                this.editDialogFormVisible = true;
            },

            //编辑对话框左上角"×"号、以及对话框内“取消按键”响应函数
            resetEditForm: function (formName) {
                this.editDialogFormVisible = false;
            },

            //编辑对话框内“确认按键”响应函数
            editCardClient: function (formName) {
                this.$refs[formName].validate((valid) => {
                    //console.log(this.cardClientForm.card_new_password);
                    if (valid) {
                        //console.log(this.cardClientForm.cardAnswer);
                        //console.log("===========");
                        //判断密保答案是否为空
                        var response_1 = this.if_invalid(this.cardClientForm.cardAnswer);
                        if (response_1 == 0) {
                            this.$alert("密保答案不能为空，请重新输入！");
                            //console.log("card_answer is null!");
                            return false;
                        }

                        //判断新密码是否为空
                        var response_2 = this.if_invalid(this.cardClientForm.card_new_password);
                        if (response_2 == 0) {
                            this.$alert("新密码不能为空，请重新输入！");
                            //console.log("newPassword is null!");
                            return false;
                        }
                        //判断确认密码是否为空
                        var response_3 = this.if_invalid(this.cardClientForm.card_again_password);
                        if (response_3 == 0) {
                            this.$alert("确认密码不能为空，请重新输入！");
                            //console.log("againPassword is null!");
                            return false;
                        }

                        //判断是否正确，若正确则与后台交互，更新数据。
                        if (this.cardClientForm.card_again_password != this.cardClientForm.card_new_password) {
                            this.$alert("两次输入不一致！");
                            //console.log("not quite！");
                            return false;
                        }


                        //判断密保答案是否正确，若正确则与后台交互，更新数据。
                        if (this.cardClientDetail.cardAnswer != this.cardClientForm.cardAnswer) {
                            this.$alert("密保答案不正确！");
                            //console.log("card_answer is error！");
                            return false;
                        } else {
                            this.c__saveCardClient(this.cardClientForm);
                            this.$alert("提交成功");
                            //console.log("submit success!");
                        }
                    }
                });
                this.editDialogFormVisible = false;
            }

        }
    });
    v1.loading();
}