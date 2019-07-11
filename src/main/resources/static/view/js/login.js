window.onload = function () {
    var v1 = new Vue({
        el: '#app',
        data: {
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
            staffForm: { //与表单绑定的staff
                staffCode: '',
                staffPassword: ''
            },
            rules: {
                staffCode: [
                    {required: true, message: '请输入登录账号', trigger: 'blur'},
                    {pattern: /^[0-9]{6,6}$/, message: '登录账号账号为6为数字', trigger: 'blur'}
                ],
                staffPassword: [
                    {required: true, message: '请输入管理员密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '登录密码长度为6-20位', trigger: 'blur'}
                ]
            },

            url: "/spring/"
            //url: "http://10.236.235.240:8081/spring/"
        },
        methods: {
            //==========================common=========================================
            //6位string型code转化为int型id。失败返回NaN。
            codeToId6: function (t_code) {
                var response = parseInt(t_code, 10);
                return response;
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

            //初始化staff
            init_staff: function () {
                var t_staff = {};
                t_staff.staffId = 0;
                t_staff.staffQuestion = '';
                t_staff.staffAnswer = '';
                t_staff.taffPassword = '';
                t_staff.staffIsAdmin = 0;
                t_staff.staffName = '';
                t_staff.staffPhone = '';
                t_staff.staffLogin = 0;
                return t_staff;
            },

            //==========================后台交互==========================================
            //账户信息：通过编号获取管理员信息。
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

            //账户信息：修改账户信息。
            saveStaff: function () {
                //数据上传到后台
                var handle = this;	//供axios使用外层this
                axios.post(this.url + "staff/save", {
                    staffId: this.staff.staffId,
                    staffQuestion: this.staff.staffQuestion,
                    staffAnswer: this.staff.staffAnswer,
                    staffIsAdmin: this.staff.staffIsAdmin,
                    staffName: this.staff.staffName,
                    staffPhone: this.staff.staffPhone,
                    staffPassword: this.staffForm.staffPassword,
                    staffLogin: this.staff.staffLogin
                }).then(function (response) {
                    //响应处理
                    if (handle.staff.staffId == response.data.staffId) {
                        //handle.$alert("修改成功!").catch(() => {});
                        console.log("saveStuff Success");
                    } else {
                        //handle.$alert("修改失败!").catch(() => {});
                        console.log("saveStuff defeat");
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //==========================后台交互==========================================
            //"提交"按钮响应函数
            submitForm: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //数据预处理
                        var t_id = this.codeToId6(this.staffForm.staffCode);
                        this.staff = this.init_staff();

                        //获取后台数据
                        this.findStaffById(t_id);

                        //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),200);
                        var handle = this;	//供setTimeout()使用外层this
                        window.setTimeout(function () {
                            //业务处理
                            //console.log(response.data);					//测试代码
                            if (handle.staff.staffId == 0) {
                                handle.$alert("无该登录账号!").catch(() => {
                                });
                                console.log("can't find from server!");
                                return false;
                            } else {
                                if (handle.staffForm.staffPassword != handle.staff.staffPassword) {
                                    handle.$alert("密码错误，请重新输入！").catch(() => {
                                    });
                                    console.log("Password Error!");
                                    return false;
                                } else {
                                    if (handle.staff.staffIsAdmin == 1) {
                                        //将staffLogin变为1
                                        handle.staff.staffLogin = 1;
                                        handle.saveStaff();
                                        var handle2 = handle; 	//供setTimeout()使用外层this
                                        window.setTimeout(function () {
                                            window.location.href = "work.html" + "?" + handle2.idToCode6(handle2.staff.staffId);
                                        }, 200);
                                    } else if (handle.staff.staffIsAdmin == 0) {
                                        //将staffLogin变为1
                                        handle.staff.staffLogin = 1;
                                        handle.saveStaff();
                                        var handle2 = handle; 	//供setTimeout()使用外层this
                                        window.setTimeout(function () {
                                            window.location.href = "staff_work.html" + "?" + handle2.idToCode6(handle2.staff.staffId);
                                        }, 200);
                                    }
                                }
                            }
                        }, 200);
                    } else {
                        return false;
                    }
                });
            }
            //==========================end==========================================
        }
    });
}