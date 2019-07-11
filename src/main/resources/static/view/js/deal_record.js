window.onload = function () {
    v1 = new Vue({
        el: '#app',
        data: {
            url: "http://127.0.0.1:8080/spring/",
            //url: "http://10.236.235.240:8081/spring/",

            activeName: "consume",	//当前激活的标签页,绑定值类型需要为string
            //=====管理员相关=========
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
            //======消费记录相关========
            consumeDetail: {
                consumeId: 0,
                consumeDate: '',
                consumePrice: 0.00,			//应收金额
                consumeDeduct: 0.00,			//抵扣金额
                consumeMoney: 0.00,			//余额
                consumePoint: 0.00,			//积分余额
                consumeRebatePrice: 0.00,	//返利积分数
                consumeRebatePoint: 0.00,	//返利后推荐人的余积分数
                cardCode: '',
                cardPassword: '',
                cardQuestion: '',
                cardAnswer: '',
                cardReferrer: 0,		//没有为null
                cardPoint: 0.00,
                cardMoney: 0.00,
                cardDeleteDate: '',	//没有为null
                clientCode: '',
                clientIsHolder: 0,
                clientName: '',
                clientGender: '',
                clientAge: '',
                clientPhone: '',
                clientDeleteDate: '',	//没有为null
                serviceCode: '',
                serviceName: '',
                serviceRebate: 0.00,
                servicePrice: 0.00,
                serviceDeleteDate: '',	//没有为null
                staffCode: '',
                staffPassword: '',
                staffQuestion: '',
                staffAnswer: '',
                staffIsAdmin: 0,
                staffName: '',
                staffPhone: '',
                staffLogin: 0,
                staffDeleteDate: ''		//没有为null
            },
            consumeDetails: [],
            consume_findByDate: '',			//左侧查询框查询条件
            consume_select: '',				//右侧查询框查询方式
            consume_input: '',				//右侧查询框查询条件
            consume_currentPage: 1,			//批量显示表格的当前页
            consume_pagesize: 5,				//批量显示表格的分页大小
            consume_totalCount: 0,			//批量显示表格的总记录数

            //======充值记录相关========
            rechargeDetail: {
                rechargeId: 0,
                rechargePrice: 0.00,
                rechargeMoney: 0.00,
                rechargeDate: '',
                cardCode: '',
                cardPassword: '',
                cardQuestion: '',
                cardAnswer: '',
                cardReferrer: 0,		//没有为null
                cardPoint: 0.00,
                cardMoney: 0.00,
                cardDeleteDate: ''	//没有为null
            },
            rechargeDetails: [],
            recharge_findByDate: '',			//左侧查询框查询条件
            recharge_select: '',				//右侧查询框查询方式
            recharge_input: '',				//右侧查询框查询条件
            recharge_currentPage: 1,			//批量显示表格的当前页
            recharge_pagesize: 5,			//批量显示表格的分页大小
            recharge_totalCount: 0,			//批量显示表格的总记录数

            //======返利记录相关========
            rebateDetail: {
                consumeId: 0,
                consumeDate: '',
                consumePrice: 0.00,
                consumeDeduct: 0.00,
                consumeMoney: 0.00,
                consumePoint: 0.00,
                consumeRebatePrice: 0.00,
                consumeRebatePoint: 0.00,
                cardCode: '',
                cardPassword: '',
                cardQuestion: '',
                cardAnswer: '',
                cardReferrer: 0,		//没有为null
                cardPoint: 0.00,
                cardMoney: 0.00,
                cardDeleteDate: '',	//没有为null
                clientCode: '',
                clientIsHolder: 0,
                clientName: '',
                clientGender: '',
                clientAge: '',
                clientPhone: '',
                clientDeleteDate: '',	//没有为null
                referrerCardCode: '',
                referrerCardPassword: '',
                referrerCardQuestion: '',
                referrerCardAnswer: '',
                referrerCardReferrer: 0,		//没有为null
                referrerCardPoint: 0.00,
                referrerCardMoney: 0.00,
                referrerCardDeleteDate: '',	//没有为null
                referrerClientCode: '',
                referrerClientIsHolder: 0,
                referrerClientName: '',
                referrerClientGender: '',
                referrerClientAge: '',
                referrerClientPhone: '',
                referrerClientDeleteDate: '',	//没有为null
                serviceCode: '',
                serviceName: '',
                serviceRebate: 0.00,
                servicePrice: 0.00,
                serviceDeleteDate: '',	//没有为null
                staffCode: '',
                staffPassword: '',
                staffQuestion: '',
                staffAnswer: '',
                staffIsAdmin: 0,
                staffName: '',
                staffPhone: '',
                staffLogin: 0,
                staffDeleteDate: ''		//没有为null
            },
            rebateDetails: [],
            rebate_findByDate: '',			//左侧查询框查询条件
            rebate_select: '',				//右侧查询框查询方式
            rebate_input: '',					//右侧查询框查询条件
            rebate_currentPage: 1,			//批量显示表格的当前页
            rebate_pagesize: 5,				//批量显示表格的分页大小
            rebate_totalCount: 0,			//批量显示表格的总记录数

            //======成本记录相关========
            costDetail: {
                costId: 0,
                costMoney: 0.00,
                costDate: ''
            },
            costDetails: [],
            cost_findByDate: '',			//左侧查询框查询条件
            cost_currentPage: 1,			//批量显示表格的当前页
            cost_pagesize: 5,				//批量显示表格的分页大小
            cost_totalCount: 0,			//批量显示表格的总记录数

            //======弹出框相关 ======
            showDialogFormVisible_1: false,	//查询"消费记录"对话框是否可见
            showDialogFormVisible_2: false,	//查询"充值记录"对话框是否可见
            showDialogFormVisible_3: false,	//查询"返利记录"对话框是否可见
            addDialogFormVisible: false, 	//新增“成本”对话框是否可见
            editDialogFormVisible: false, //修改“成本”对话框是否可见

            //表单验证规则
            rules: {
                costMoney: [
                    {required: true, message: '请输入成本', trigger: 'blur'},
                    {
                        pattern: /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/,
                        message: '格式为100或100.0或100.00形式',
                        trigger: 'blur'
                    }
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

            //初始化consumeDetail
            init_consumeDetail: function () {
                var t_consumeDetail = {};
                t_consumeDetail.consumeId = 0;
                t_consumeDetail.consumeDate = '';
                t_consumeDetail.consumePrice = 0.00;
                t_consumeDetail.consumeDeduct = 0.00;
                t_consumeDetail.consumeMoney = 0.00;
                t_consumeDetail.consumePoint = 0.00;
                t_consumeDetail.consumeRebatePrice = 0.00;
                t_consumeDetail.consumeRebatePoint = 0.00;
                t_consumeDetail.cardCode = '';
                t_consumeDetail.cardPassword = '';
                t_consumeDetail.cardQuestion = '';
                t_consumeDetail.cardAnswer = '';
                t_consumeDetail.cardReferrer = 0;
                t_consumeDetail.cardPoint = 0.00;
                t_consumeDetail.cardMoney = 0.00;
                t_consumeDetail.cardDeleteDate = '';
                t_consumeDetail.clientCode = '';
                t_consumeDetail.clientIsHolder = 0;
                t_consumeDetail.clientName = '';
                t_consumeDetail.clientGender = '';
                t_consumeDetail.clientAge = '';
                t_consumeDetail.clientPhone = '';
                t_consumeDetail.clientDeleteDate = '';
                t_consumeDetail.serviceCode = '';
                t_consumeDetail.serviceName = '';
                t_consumeDetail.serviceRebate = 0.00;
                t_consumeDetail.servicePrice = 0.00;
                t_consumeDetail.serviceDeleteDate = '';
                t_consumeDetail.staffCode = '';
                t_consumeDetail.staffPassword = '';
                t_consumeDetail.staffQuestion = '';
                t_consumeDetail.staffAnswer = '';
                t_consumeDetail.staffIsAdmin = 0;
                t_consumeDetail.staffName = '';
                t_consumeDetail.staffPhone = '';
                t_consumeDetail.staffLogin = 0;
                t_consumeDetail.staffDeleteDate = '';
                return t_consumeDetail;
            },

            //初始化rechargeDetail
            init_rechargeDetail: function () {
                var t_rechargeDetail = {};
                t_rechargeDetail.rechargeId = 0;
                t_rechargeDetail.rechargePrice = 0.00;
                t_rechargeDetail.rechargeMoney = 0.00;
                t_rechargeDetail.rechargeDate = '';
                t_rechargeDetail.cardCode = '';
                t_rechargeDetail.cardPassword = '';
                t_rechargeDetail.cardQuestion = '';
                t_rechargeDetail.cardAnswer = '';
                t_rechargeDetail.cardReferrer = 0;
                t_rechargeDetail.cardPoint = 0.00;
                t_rechargeDetail.cardMoney = 0.00;
                t_rechargeDetail.cardDeleteDate = '';
                return t_rechargeDetail;
            },

            //初始化rebateDetail
            init_rebateDetail: function () {
                var t_rebateDetail = {};
                t_rebateDetail.consumeId = 0;
                t_rebateDetail.consumeDate = '';
                t_rebateDetail.consumePrice = 0.00;
                t_rebateDetail.consumeDeduct = 0.00;
                t_rebateDetail.consumeMoney = 0.00;
                t_rebateDetail.consumePoint = 0.00;
                t_rebateDetail.consumeRebatePrice = 0.00;
                t_rebateDetail.consumeRebatePoint = 0.00;
                t_rebateDetail.cardCode = '';
                t_rebateDetail.cardPassword = '';
                t_rebateDetail.cardQuestion = '';
                t_rebateDetail.cardAnswer = '';
                t_rebateDetail.cardReferrer = 0;
                t_rebateDetail.cardPoint = 0.00;
                t_rebateDetail.cardMoney = 0.00;
                t_rebateDetail.cardDeleteDate = '';
                t_rebateDetail.clientCode = '';
                t_rebateDetail.clientIsHolder = 0;
                t_rebateDetail.clientName = '';
                t_rebateDetail.clientGender = '';
                t_rebateDetail.clientAge = '';
                t_rebateDetail.clientPhone = '';
                t_rebateDetail.clientDeleteDate = '';
                t_rebateDetail.referrerCardCode = '';
                t_rebateDetail.referrerCardPassword = '';
                t_rebateDetail.referrerCardQuestion = '';
                t_rebateDetail.referrerCardAnswer = '';
                t_rebateDetail.referrerCardReferrer = 0;
                t_rebateDetail.referrerCardPoint = 0.00;
                t_rebateDetail.referrerreferrerCardMoney = 0.00;
                t_rebateDetail.referrerCardDeleteDate = '';
                t_rebateDetail.referrerClientCode = '';
                t_rebateDetail.referrerClientIsHolder = 0;
                t_rebateDetail.referrerClientName = '';
                t_rebateDetail.referrerClientGender = '';
                t_rebateDetail.referrerClientAge = '';
                t_rebateDetail.referrerClientPhone = '';
                t_rebateDetail.referrerClientDeleteDate = '';
                t_rebateDetail.serviceCode = '';
                t_rebateDetail.serviceName = '';
                t_rebateDetail.serviceRebate = 0.00;
                t_rebateDetail.servicePrice = 0.00;
                t_rebateDetail.serviceDeleteDate = '';
                t_rebateDetail.staffCode = '';
                t_rebateDetail.staffPassword = '';
                t_rebateDetail.staffQuestion = '';
                t_rebateDetail.staffAnswer = '';
                t_rebateDetail.staffIsAdmin = 0;
                t_rebateDetail.staffName = '';
                t_rebateDetail.staffPhone = '';
                t_rebateDetail.staffLogin = 0;
                t_rebateDetail.staffDeleteDate = '';
                return t_rebateDetail;
            },

            //初始化costDetail
            init_costDetail: function () {
                var t_costDetail = {};
                t_costDetail.costId = 0;
                t_costDetail.costDate = '';
                t_costDetail.costMoney = 0.00;
                return t_costDetail;
            },

            //获取当前时间
            getNowDay: function () {
                var date = new Date(); 			//创建时间对象
                var year = date.getFullYear(); 	//获取年
                var month = (date.getMonth() + 1);	//获取月
                var day = date.getDate(); 		//获取当日
                if (month >= 0 && month <= 9) {
                    month = "0" + month.toString();
                }
                if (day >= 0 && day <= 9) {
                    day = "0" + day.toString();
                }
                var nowDate = year + "-" + month + "-" + day; //组合时间
                return nowDate;
            },

            //获取三月前时间
            getThreeMonthAgoDay: function () {
                var date = new Date(); 				//创建时间对象
                var year = date.getFullYear(); 		//获取年
                var month = date.getMonth();		//获取月
                var day = date.getDate(); 			//获取当日

                var ago = new Date(year, month - 2, 1);
                var ago_year = ago.getFullYear(); 	//获取年
                var ago_month = (ago.getMonth() + 1);	//获取月
                var ago_day = ago.getDate(); 		//获取当日


                if (ago_month >= 0 && ago_month <= 9) {
                    ago_month = "0" + ago_month.toString();
                }
                if (ago_day >= 0 && ago_day <= 9) {
                    ago_day = "0" + ago_day.toString();
                }
                var agoDate = ago_year + "-" + ago_month + "-" + ago_day; //组合时间
                return agoDate;
            },

            //element-ui时间转换为标准时间格式（带时分秒）
            dateTransform: function (t_time) {
                var array = t_time.split(" ");
                var month = array[1];
                var day = array[2];
                var year = array[3];
                var time = array[4];
                var res = "";

                if (month == "Jan") {
                    month = "01";
                } else if (month == "Feb") {
                    month = "02";
                } else if (month == "Mar") {
                    month = "03";
                } else if (month == "Apr") {
                    month = "04";
                } else if (month == "May") {
                    month = "05";
                } else if (month == "Jun") {
                    month = "06";
                } else if (month == "Jul") {
                    month = "07";
                } else if (month == "Aug") {
                    month = "08";
                } else if (month == "Sep") {
                    month = "09";
                } else if (month == "Oct") {
                    month = "10";
                } else if (month == "Nov") {
                    month = "11";
                } else {
                    month = "12";
                }
                res = year + "-" + month + "-" + day + " " + time;
                return res;
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

            //将推荐人id转化为页面显示。若存在则转化为code，若不存在则显示"无"。
            referrerToShow: function (t_referrer) {
                if (t_referrer == null) {
                    return "无";
                } else {
                    return this.idToCode6(t_referrer);
                }
            },

            //将"是否为持有人"转化为页面显示。若为1则转化为"是"，若为0则转化为"否"。
            holderToShow: function (t_isHolder) {
                if (t_isHolder == "1") {
                    return "是";
                } else {
                    return "否";
                }
            },

            //consumeDetail表格相关
            consume_handleSizeChange: function (pagesize) {
                this.consume_pagesize = pagesize;
            },
            consume_handleCurrentChange: function (currentPage) {
                this.consume_currentPage = currentPage;
            },

            //rechargeDetail表格相关
            recharge_handleSizeChange: function (pagesize) {
                this.recharge_pagesize = pagesize;
            },
            recharge_handleCurrentChange: function (currentPage) {
                this.recharge_currentPage = currentPage;
            },

            //rebateDetail表格相关
            rebate_handleSizeChange: function (pagesize) {
                this.rebate_pagesize = pagesize;
            },
            rebate_handleCurrentChange: function (currentPage) {
                this.rebate_currentPage = currentPage;
            },

            //costDetail表格相关
            cost_handleSizeChange: function (pagesize) {
                this.cost_pagesize = pagesize;
            },
            cost_handleCurrentChange: function (currentPage) {
                this.cost_currentPage = currentPage;
            },

            //========================== 后台交互 ======================================
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

            //-------------------------消费记录后台交互-----------------------------
            //消费记录后台交互: 获取所有consumeDetail信息。
            findAllConsumeDetail: function () {
                handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findAllDetail", {
                    params: {}
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("消费记录为空!").catch(() => {
                        });
                        console.log("no consume records!");
                    } else {
                        //初始化consumeDetails
                        while (handle.consumeDetails.length != 0) {
                            handle.consumeDetails.pop();
                        }
                        //将新结果保存到consumeDetails
                        handle.consumeDetails = response.data;
                        handle.consume_totalCount = handle.consumeDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //消费记录后台交互：按日期查询
            findConsumeByDate: function (t_firstDate, t_lastDate) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findByDateBetween", {
                    params: {
                        startTime: t_firstDate,
                        endTime: t_lastDate
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findConsumeByDate Error!");
                    } else {
                        //初始化fDetails
                        while (handle.consumeDetails.length != 0) {
                            handle.consumeDetails.pop();
                        }
                        //将新结果保存到consumeDetails
                        handle.consumeDetails = response.data;
                        handle.consume_totalCount = handle.consumeDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //消费记录后台交互：按消费记录编号
            findConsumeByConsumeId: function (t_consumeId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findByConsumeId", {
                    params: {
                        id: t_consumeId
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data == null) {
                        handle.$alert("没有对应的消费记录!").catch(() => {
                        });
                        console.log("findConsumeByConsumeId Error!");
                    } else {
                        handle.consumeDetail.consumeId = response.data.consumeId;
                        handle.consumeDetail.consumeDate = response.data.consumeDate;
                        handle.consumeDetail.consumePrice = response.data.consumePrice;
                        handle.consumeDetail.consumeDeduct = response.data.consumeDeduct;
                        handle.consumeDetail.consumeMoney = response.data.consumeMoney;
                        handle.consumeDetail.consumePoint = response.data.consumePoint;
                        handle.consumeDetail.consumeRebatePrice = response.data.consumeRebatePrice;
                        handle.consumeDetail.consumeRebatePoint = response.data.consumeRebatePoint;
                        handle.consumeDetail.cardCode = handle.idToCode6(response.data.cardId);
                        handle.consumeDetail.cardPassword = response.data.cardPassword;
                        handle.consumeDetail.cardQuestion = response.data.cardQuestion;
                        handle.consumeDetail.cardAnswer = response.data.cardAnswer;
                        handle.consumeDetail.cardReferrer = response.data.cardReferrer;
                        handle.consumeDetail.cardPoint = response.data.cardPoint;
                        handle.consumeDetail.cardMoney = response.data.cardMoney;
                        handle.consumeDetail.cardDeleteDate = response.data.cardDeleteDate;
                        handle.consumeDetail.clientCode = handle.idToCode6(response.data.clientId);
                        handle.consumeDetail.clientIsHolder = response.data.clientIsHolder;
                        handle.consumeDetail.clientName = response.data.clientName;
                        handle.consumeDetail.clientGender = response.data.clientGender;
                        handle.consumeDetail.clientAge = response.data.clientAge;
                        handle.consumeDetail.clientPhone = response.data.clientPhone;
                        handle.consumeDetail.clientDeleteDate = response.data.clientDeleteDate;
                        handle.consumeDetail.serviceCode = handle.idToCode6(response.data.serviceId);
                        handle.consumeDetail.serviceName = response.data.serviceName;
                        handle.consumeDetail.serviceRebate = response.data.serviceRebate;
                        handle.consumeDetail.servicePrice = response.data.servicePrice;
                        handle.consumeDetail.serviceDeleteDate = response.data.serviceDeleteDate;
                        handle.consumeDetail.staffCode = handle.idToCode6(response.data.staffId);
                        handle.consumeDetail.staffPassword = response.data.staffPassword;
                        handle.consumeDetail.staffQuestion = response.data.staffQuestion;
                        handle.consumeDetail.staffAnswer = response.data.staffAnswer;
                        handle.consumeDetail.staffIsAdmin = response.data.staffIsAdmin;
                        handle.consumeDetail.staffName = response.data.staffName;
                        handle.consumeDetail.staffPhone = response.data.staffPhone;
                        handle.consumeDetail.staffLogin = response.data.staffLogin;
                        handle.consumeDetail.staffDeleteDate = response.data.staffDeleteDate;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //消费记录后台交互：按会员卡编号查询
            findConsumeByCardId: function (t_cardId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findByCardId", {
                    params: {
                        id: t_cardId
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findConsumeByCardId Error!");
                    } else {
                        //初始化consumeDetails
                        while (handle.consumeDetails.length != 0) {
                            handle.consumeDetails.pop();
                        }
                        //将新结果保存到consumeDetails
                        handle.consumeDetails = response.data;
                        handle.consume_totalCount = handle.consumeDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //消费记录后台交互：按客户编号查询
            findConsumeByClientId: function (t_clientId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findByClientId", {
                    params: {
                        id: t_clientId
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findConsumeByClientId Error!");
                    } else {
                        //初始化consumeDetails
                        while (handle.consumeDetails.length != 0) {
                            handle.consumeDetails.pop();
                        }
                        //将新结果保存到consumeDetails
                        handle.consumeDetails = response.data;
                        handle.consume_totalCount = handle.consumeDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //消费记录后台交互：按员工编号查询
            findConsumeByStaffId: function (t_staffId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/findByStaffId", {
                    params: {
                        id: t_staffId
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findConsumeByStaffId Error!");
                    } else {
                        //初始化consumeDetails
                        while (handle.consumeDetails.length != 0) {
                            handle.consumeDetails.pop();
                        }
                        //将新结果保存到consumeDetails
                        handle.consumeDetails = response.data;
                        handle.consume_totalCount = handle.consumeDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //消费记录后台交互：通过id撤销消费记录，返回1成功、0失败。
            cancelConsumeById: function (t_consumeId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "consume/cancelConsume?consumeId=" + t_consumeId).then(function (response) {
                    //业务处理
                    //console.log(response.data);
                    if (response.data == 1) {
                        handle.$alert("撤销成功!").catch(() => {
                        });
                        console.log("cancelConsumeById Success!");
                    } else {
                        handle.$alert("撤销失败!").catch(() => {
                        });
                        console.log("cancelConsumeById Error!");
                        return false;
                    }
                    //刷新页面，即页面复原。
                    handle.loading();
                }).catch(function (error) {
                    console.log(error);
                });
            },
            //-------------------------充值记录后台交互-----------------------------
            //充值记录后台交互: 获取所有rechargeDetail信息。
            findAllRechargeDetail: function () {
                handle = this; //供axios使用外层this
                axios.get(this.url + "recharge/findAllDetail", {
                    params: {}
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("充值记录为空!").catch(() => {
                        });
                        console.log("no recharge records!");
                    } else {
                        //初始化rechargeDetails
                        while (handle.rechargeDetails.length != 0) {
                            handle.rechargeDetails.pop();
                        }
                        //将新结果保存到rechargeDetails
                        handle.rechargeDetails = response.data;
                        handle.recharge_totalCount = handle.rechargeDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //充值记录后台交互: 按日期查询
            findRechargeByDate: function (t_firstDate, t_lastDate) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "recharge/findByDateBetween", {
                    params: {
                        startTime: t_firstDate,
                        endTime: t_lastDate
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findRechargeByDate Error!");
                    } else {
                        //初始化rechargeDetails
                        while (handle.rechargeDetails.length != 0) {
                            handle.rechargeDetails.pop();
                        }
                        //将新结果保存到rechargeDetails
                        handle.rechargeDetails = response.data;
                        handle.recharge_totalCount = handle.rechargeDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //充值记录后台交互：按充值记录编号
            findRechargeByRechargeId: function (t_rechargeId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "recharge/findByRechargeId", {
                    params: {
                        id: t_rechargeId
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data == null) {
                        handle.$alert("没有对应的 充值记录!").catch(() => {
                        });
                        console.log("findRechargeByRechargeId Error!");
                    } else {
                        handle.rechargeDetail.rechargeId = response.data.rechargeId;
                        handle.rechargeDetail.rechargePrice = response.data.rechargePrice;
                        handle.rechargeDetail.rechargeMoney = response.data.rechargeMoney;
                        handle.rechargeDetail.rechargeDate = response.data.rechargeDate;
                        handle.rechargeDetail.cardCode = handle.idToCode6(response.data.cardId);
                        handle.rechargeDetail.cardPassword = response.data.cardPassword;
                        handle.rechargeDetail.cardQuestion = response.data.cardQuestion;
                        handle.rechargeDetail.cardAnswer = response.data.cardAnswer;
                        handle.rechargeDetail.cardReferrer = response.data.cardReferrer;
                        handle.rechargeDetail.cardPoint = response.data.cardPoint;
                        handle.rechargeDetail.cardMoney = response.data.cardMoney;
                        handle.rechargeDetail.cardDeleteDate = response.data.cardDeleteDate;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //充值记录后台交互：按会员卡编号查询
            findRechargeByCardId: function (t_cardId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "recharge/findByCardId", {
                    params: {
                        id: t_cardId
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findRechargeByCardId! Error");
                    } else {
                        //初始化rechargeDetails
                        while (handle.rechargeDetails.length != 0) {
                            handle.rechargeDetails.pop();
                        }
                        //将新结果保存到rechargeDetails
                        handle.rechargeDetails = response.data;
                        handle.recharge_totalCount = handle.rechargeDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //充值记录后台交互：通过id撤销充值记录，返回1成功、0失败。
            cancelRechargeById: function (t_rechargeId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "recharge/cancelRecharge?rechargeId=" + t_rechargeId).then(function (response) {
                    //业务处理
                    //console.log(response.data);
                    if (response.data == 1) {
                        handle.$alert("撤销成功!").catch(() => {
                        });
                        console.log("cancelRechargeById Success!");
                    } else {
                        handle.$alert("撤销失败!").catch(() => {
                        });
                        console.log("cancelRechargeById Error!");
                        return false;
                    }
                    //刷新页面，即页面复原。
                    handle.loading();
                }).catch(function (error) {
                    console.log(error);
                });
            },
            //-------------------------返利记录后台交互-----------------------------
            //返利记录后台交互: 获取所有rebateDetail信息。
            findAllRebateDetail: function () {
                handle = this; //供axios使用外层this
                axios.get(this.url + "rebate/findAllDetail", {
                    params: {}
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("返利记录为空!").catch(() => {
                        });
                        console.log("no rebate records!");
                    } else {
                        //清除之前记录
                        while (handle.rebateDetails.length != 0) {
                            handle.rebateDetails.pop();
                        }
                        //去掉返利为0的记录项,将新结果保存到rebateDetails
                        var count = 0;
                        for (var i = 0; i < response.data.length; i++) {
                            if (response.data[i].serviceRebate != 0) {
                                handle.rebateDetails.push(response.data[i]);
                                count = count + 1;
                            }
                        }
                        handle.rebate_totalCount = count;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //返利记录后台交互: 按日期查询
            findRebateByDate: function (t_firstDate, t_lastDate) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "rebate/findByDateBetween", {
                    params: {
                        startTime: t_firstDate,
                        endTime: t_lastDate
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findRebateByDate Error!");
                    } else {
                        //清除之前记录
                        while (handle.rebateDetails.length != 0) {
                            handle.rebateDetails.pop();
                        }
                        //去掉返利为0的记录项,将新结果保存到rebateDetails
                        var count = 0;
                        for (var i = 0; i < response.data.length; i++) {
                            if (response.data[i].serviceRebate != 0) {
                                handle.rebateDetails.push(response.data[i]);
                                count = count + 1;
                            }
                        }
                        handle.rebate_totalCount = count;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //返利记录后台交互：按消费记录编号
            findRebateByConsumeId: function (t_consumeId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "/rebate/findByConsumeId", {
                    params: {
                        id: t_consumeId
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data == null) {
                        handle.$alert("没有对应的返利记录!").catch(() => {
                        });
                        console.log("findRebateByConsumeId Error!");
                    } else {
                        handle.rebateDetail.consumeId = response.data.consumeId;
                        handle.rebateDetail.consumeDate = response.data.consumeDate;
                        handle.rebateDetail.consumePrice = response.data.consumePrice;
                        handle.rebateDetail.consumeDeduct = response.data.consumeDeduct;
                        handle.rebateDetail.consumeMoney = response.data.consumeMoney;
                        handle.rebateDetail.consumePoint = response.data.consumePoint;
                        handle.rebateDetail.consumeRebatePrice = response.data.consumeRebatePrice;
                        handle.rebateDetail.consumeRebatePoint = response.data.consumeRebatePoint;
                        handle.rebateDetail.cardCode = handle.idToCode6(response.data.cardId);
                        handle.rebateDetail.cardPassword = response.data.cardPassword;
                        handle.rebateDetail.cardQuestion = response.data.cardQuestion;
                        handle.rebateDetail.cardAnswer = response.data.cardAnswer;
                        handle.rebateDetail.cardReferrer = response.data.cardReferrer;
                        handle.rebateDetail.cardPoint = response.data.cardPoint;
                        handle.rebateDetail.cardMoney = response.data.cardMoney;
                        handle.rebateDetail.cardDeleteDate = response.data.cardDeleteDate;
                        handle.rebateDetail.clientCode = handle.idToCode6(response.data.clientId);
                        handle.rebateDetail.clientIsHolder = response.data.clientIsHolder;
                        handle.rebateDetail.clientName = response.data.clientName;
                        handle.rebateDetail.clientGender = response.data.clientGender;
                        handle.rebateDetail.clientAge = response.data.clientAge;
                        handle.rebateDetail.clientPhone = response.data.clientPhone;
                        handle.rebateDetail.clientDeleteDate = response.data.clientDeleteDate;
                        handle.rebateDetail.referrerCardCode = handle.idToCode6(response.data.referrerCardId);
                        handle.rebateDetail.referrerCardPassword = response.data.referrerCardPassword;
                        handle.rebateDetail.referrerCardQuestion = response.data.referrerCardQuestion;
                        handle.rebateDetail.referrerCardAnswer = response.data.referrerCardAnswer;
                        handle.rebateDetail.referrerCardReferrer = response.data.referrerCardReferrer;
                        handle.rebateDetail.referrerCardPoint = response.data.referrerCardPoint;
                        handle.rebateDetail.referrerreferrerCardMoney = response.data.referrerreferrerCardMoney;
                        handle.rebateDetail.referrerCardDeleteDate = response.data.referrerCardDeleteDate;
                        handle.rebateDetail.referrerClientCode = handle.idToCode6(response.data.referrerClientId);
                        handle.rebateDetail.referrerClientIsHolder = response.data.referrerClientIsHolder;
                        handle.rebateDetail.referrerClientName = response.data.referrerClientName;
                        handle.rebateDetail.referrerClientGender = response.data.referrerClientGender;
                        handle.rebateDetail.referrerClientAge = response.data.referrerClientAge;
                        handle.rebateDetail.referrerClientPhone = response.data.referrerClientPhone;
                        handle.rebateDetail.referrerClientDeleteDate = response.data.referrerClientDeleteDate;
                        handle.rebateDetail.serviceCode = handle.idToCode6(response.data.serviceId);
                        handle.rebateDetail.serviceName = response.data.serviceName;
                        handle.rebateDetail.serviceRebate = response.data.serviceRebate;
                        handle.rebateDetail.servicePrice = response.data.servicePrice;
                        handle.rebateDetail.serviceDeleteDate = response.data.serviceDeleteDate;
                        handle.rebateDetail.staffCode = handle.idToCode6(response.data.staffId);
                        handle.rebateDetail.staffPassword = response.data.staffPassword;
                        handle.rebateDetail.staffQuestion = response.data.staffQuestion;
                        handle.rebateDetail.staffAnswer = response.data.staffAnswer;
                        handle.rebateDetail.staffIsAdmin = response.data.staffIsAdmin;
                        handle.rebateDetail.staffName = response.data.staffName;
                        handle.rebateDetail.staffPhone = response.data.staffPhone;
                        handle.rebateDetail.staffLogin = response.data.staffLogin;
                        handle.rebateDetail.staffDeleteDate = response.data.staffDeleteDate;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //返利记录后台交互：按消费者卡编号查询
            findRebateByCardId: function (t_cardId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "rebate/findByCardId", {
                    params: {
                        cardId: t_cardId
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findRebateByCardId Error!");
                    } else {
                        //清除之前记录
                        while (handle.rebateDetails.length != 0) {
                            handle.rebateDetails.pop();
                        }
                        //去掉返利为0的记录项,将新结果保存到rebateDetails
                        var count = 0;
                        for (var i = 0; i < response.data.length; i++) {
                            if (response.data[i].serviceRebate != 0) {
                                handle.rebateDetails.push(response.data[i]);
                                count = count + 1;
                            }
                        }
                        handle.rebate_totalCount = count;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //返利记录后台交互：按推荐人卡编号查询
            findRebateByReferrerCardId: function (t_referrerCardId) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "rebate/findByReferrerCardId", {
                    params: {
                        referrerCardId: t_referrerCardId
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findRebateByReferrerCardId Error!");
                    } else {
                        //清除之前记录
                        while (handle.rebateDetails.length != 0) {
                            handle.rebateDetails.pop();
                        }
                        //去掉返利为0的记录项,将新结果保存到rebateDetails
                        var count = 0;
                        for (var i = 0; i < response.data.length; i++) {
                            if (response.data[i].serviceRebate != 0) {
                                handle.rebateDetails.push(response.data[i]);
                                count = count + 1;
                            }
                        }
                        handle.rebate_totalCount = count;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //-------------------------成本记录后台交互-----------------------------
            //成本记录后台交互：获取所有costDetail信息。
            findAllCostDetail: function () {
                handle = this; //供axios使用外层this
                axios.get(this.url + "cost/findAll", {
                    params: {}
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("获取成本记录失败!").catch(() => {
                        });
                        console.log("findAllCostDetail Error!");
                    } else {
                        //初始化costDetails
                        while (handle.costDetails.length != 0) {
                            handle.costDetails.pop();
                        }
                        //将新结果保存到costDetails
                        handle.costDetails = response.data;
                        handle.cost_totalCount = handle.costDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //成本记录后台交互：按日期查询
            findCostByDate: function (t_firstDate, t_lastDate) {
                var handle = this; //供axios使用外层this
                axios.get(this.url + "cost/findByDateBetween", {
                    params: {
                        startTime: t_firstDate,
                        endTime: t_lastDate
                    }
                }).then(function (response) {
                    //console.log(response.data);					//测试代码
                    if (response.data.length == 0) {
                        handle.$alert("没有符合条件的记录!").catch(() => {
                        });
                        console.log("findCostByDate Error!");
                    } else {
                        //初始化costDetails
                        while (handle.costDetails.length != 0) {
                            handle.costDetails.pop();
                        }
                        //将新结果保存到costDetails
                        handle.costDetails = response.data;
                        handle.cost_totalCount = handle.costDetails.length;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //成本记录后台交互：新增或修改成本信息。当costId=null时新增，costId=已有记录id时修改。
            saveCostDetail: function (t_costDetail) {
                //向后台上传数据
                var handle = this; //供axios使用外层this
                axios.post(this.url + "cost/save", {
                    costId: t_costDetail.costId,
                    costMoney: t_costDetail.costMoney,
                    costDate: t_costDetail.costDate,
                }).then(function (response) {
                    //业务处理
                    //console.log(response.data);
                    if (t_costDetail.costMoney == response.data.costMoney) {
                        handle.$alert("操作成功!").catch(() => {
                        });
                        console.log("saveCostDetail Success");
                    } else {
                        handle.$alert("操作失败!").catch(() => {
                        });
                        console.log("saveCostDetail defeat");
                        return false;
                    }
                    //刷新页面，即页面复原。
                    handle.loading();
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //成本记录后台交互：通过编号删除成本信息
            deleteCostDetail: function (t_costId) {
                //向后台上传数据
                var handle = this; //供axios使用外层this
                axios.get(this.url + "cost/deleteById?id=" + t_costId).then(function (response) {
                    //业务处理
                    //console.log(response.data);
                    if (response.data != true) {
                        handle.$alert("删除失败!").catch(() => {
                        });
                        console.log("deleteCostDetaill defeat");
                        return false;
                    } else {
                        handle.$alert("删除成功!").catch(() => {
                        });
                        console.log("deleteCostDetail Success");
                    }
                    //刷新页面，即页面复原。
                    handle.loading();
                }).catch(function (error) {
                    console.log(error);
                });
            },

            //========================== 响应函数 =========================================
            //“登录页面”响应函数。初始化数据；显示四种记录。
            loading: function () {
                //初始化
                this.staff = this.init_staff();
                this.consumeDetail = this.init_consumeDetail();
                this.rechargeDetail = this.init_rechargeDetail();
                this.rebateDetail = this.init_rebateDetail();
                this.costDetail = this.init_costDetail();
                var t_staffCode = window.location.href.split("?")[1];	//从网址获取code

                //与后台交互，通过t_staffCode查询 staff信息；
                var t_id = this.codeToId6(t_staffCode);
                this.findStaffById(t_id);

                //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),400);
                var handle = this;	//供setTimeout()使用外层this
                window.setTimeout(function () {
                    //登录校验。无账号登录||非管理员账号登录||管理员登录标识位为0，则失败。
                    if (handle.staff.staffId == 0 || handle.staff.staffIsAdmin == 0 || handle.staff.staffLogin == 0) {
                        window.location.href = "login.html";
                    }

                    //获取时间信息
                    var firstDate = handle.getThreeMonthAgoDay() + " " + "00:00:00";
                    var lastDate = handle.getNowDay() + " " + "23:59:59";
                    //与后台交互，获取近三个月consumeDetail信息；
                    handle.findConsumeByDate(firstDate, lastDate);
                    //与后台交互，获取近三个月rechargeDetail信息；
                    handle.findRechargeByDate(firstDate, lastDate);
                    //与后台交互，获取近三个月rebateDetail信息；
                    handle.findRebateByDate(firstDate, lastDate);
                    //与后台交互，获取近三个月costDetail信息；
                    handle.findCostByDate(firstDate, lastDate);
                }, 400);
            },

            //-------------------------消费记录响应函数-----------------------------
            //消费记录：”按日期查询“按键响应函数
            Consume_clickDateButton: function (t_costDate) {
                //console.log(t_costDate);		//测试语句
                if (t_costDate == '') {				//之前没有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else if (t_costDate == null) {		//之前有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else {								//选择日期后点击查询按钮
                    var firstDate = t_costDate[0].toString() + " " + "00:00:00";
                    var lastDate = t_costDate[1].toString() + " " + "23:59:59";
                    this.findConsumeByDate(firstDate, lastDate);
                }
            },

            //消费记录：”按下拉列表查询“按键响应函数
            Consume_clickSelectButton: function (t_consume_select, t_consume_input) {
                if (t_consume_select == 'all') {
                    //获取时间信息
                    var firstDate = this.getThreeMonthAgoDay() + " " + "00:00:00";
                    var lastDate = this.getNowDay() + " " + "23:59:59";
                    this.findConsumeByDate(firstDate, lastDate);
                } else if (t_consume_select == 'consume') {
                    //判断查询条件是否为空
                    if (t_consume_input == '' || t_consume_input == null) {
                        this.$alert("请输入查询条件！").catch(() => {
                        });
                        console.log("input error!");
                        return false;
                    }
                    //初始化consumeDetail
                    this.consumeDetail = this.init_consumeDetail();
                    //后台交互
                    this.findConsumeByConsumeId(t_consume_input);
                    //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),200);
                    var handle = this;	//供setTimeout()使用外层this
                    window.setTimeout(function () {
                        //若没有获取到数据。
                        if (handle.consumeDetail.consumeId == 0) {
                            return false;
                        }
                        //显示对话框
                        handle.showDialogFormVisible_1 = true;
                    }, 200);
                } else if (t_consume_select == 'card') {
                    if (t_consume_input == '' || t_consume_input == null) {
                        this.$alert("请输入查询条件！").catch(() => {
                        });
                        console.log("input error!");
                        return false;
                    }
                    this.findConsumeByCardId(t_consume_input);
                } else if (t_consume_select == 'client') {
                    if (t_consume_input == '' || t_consume_input == null) {
                        this.$alert("请输入查询条件！").catch(() => {
                        });
                        console.log("input error!");
                        return false;
                    }
                    this.findConsumeByClientId(t_consume_input);
                } else if (t_consume_select == 'staff') {
                    if (t_consume_input == '' || t_consume_input == null) {
                        this.$alert("请输入查询条件！").catch(() => {
                        });
                        console.log("input error!");
                        return false;
                    }
                    this.findConsumeByStaffId(t_consume_input);
                } else {
                    this.$alert("请选择查询方式！").catch(() => {
                    });
                    console.log("select error!");
                    return false;
                }
            },

            //消费记录：”撤销“按键响应函数
            Consume_clickCancelButton: function (t_consumeId) {
                this.$confirm('撤销将会返回金钱给消费者、扣除推荐人返利，确定撤销吗？', '注意').then(() => {
                    this.cancelConsumeById(t_consumeId);
                }).catch(() => {
                });
            },

            //-------------------------充值记录响应函数-----------------------------
            //充值记录：”按日期查询“按键响应函数
            Recharge_clickDateButton: function (t_costDate) {
                //console.log(t_costDate);		//测试语句
                if (t_costDate == '') {				//之前没有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else if (t_costDate == null) {		//之前有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else {								//选择日期后点击查询按钮
                    var firstDate = t_costDate[0].toString() + " " + "00:00:00";
                    var lastDate = t_costDate[1].toString() + " " + "23:59:59";
                    this.findRechargeByDate(firstDate, lastDate);
                }
            },

            //充值记录：”按下拉列表查询“按键响应函数
            Recharge_clickSelectButton: function (t_recharge_select, t_recharge_input) {
                if (t_recharge_select == 'all') {
                    //获取时间信息
                    var firstDate = this.getThreeMonthAgoDay() + " " + "00:00:00";
                    var lastDate = this.getNowDay() + " " + "23:59:59";
                    this.findRechargeByDate(firstDate, lastDate);
                } else if (t_recharge_select == 'recharge') {
                    if (t_recharge_input == '' || t_recharge_input == null) {
                        this.$alert("请输入查询条件！").catch(() => {
                        });
                        console.log("input error!");
                        return false;
                    }
                    //初始化rechargeDetail
                    this.rechargeDetail = this.init_rechargeDetail();
                    //后台交互
                    this.findRechargeByRechargeId(t_recharge_input);
                    //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),200);
                    var handle = this;	//供setTimeout()使用外层this
                    window.setTimeout(function () {
                        //若没有获取到数据。
                        if (handle.rechargeDetail.rechargeId == 0) {
                            return false;
                        }
                        //显示对话框
                        handle.showDialogFormVisible_2 = true;
                    }, 200);
                } else if (t_recharge_select == 'card') {
                    if (t_recharge_input == '' || t_recharge_input == null) {
                        this.$alert("请输入查询条件！").catch(() => {
                        });
                        console.log("input error!");
                        return false;
                    }
                    this.findRechargeByCardId(t_recharge_input);
                } else {
                    this.$alert("请选择查询方式！").catch(() => {
                    });
                    console.log("select error!");
                    return false;
                }
            },

            //充值记录：”撤销“按键响应函数
            Recharge_clickCancelButton: function (t_rechargeId) {
                this.$confirm('撤销将会扣除会员卡余额，确定撤销吗？', '注意').then(() => {
                    this.cancelRechargeById(t_rechargeId);
                }).catch(() => {
                });
            },

            //-------------------------返利记录响应函数-----------------------------
            //返利记录：”按日期查询“按键响应函数
            Rebate_clickDateButton: function (t_costDate) {
                //console.log(t_costDate);		//测试语句
                if (t_costDate == '') {				//之前没有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else if (t_costDate == null) {		//之前有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else {								//选择日期后点击查询按钮
                    var firstDate = t_costDate[0].toString() + " " + "00:00:00";
                    var lastDate = t_costDate[1].toString() + " " + "23:59:59";
                    this.findRebateByDate(firstDate, lastDate);
                }
            },

            //返利记录：”按下拉列表查询“按键响应函数
            Rebate_clickSelectButton: function (t_rebate_select, t_rebate_input) {
                if (t_rebate_select == 'all') {
                    //获取时间信息
                    var firstDate = this.getThreeMonthAgoDay() + " " + "00:00:00";
                    var lastDate = this.getNowDay() + " " + "23:59:59";
                    this.findRebateByDate(firstDate, lastDate);
                } else if (t_rebate_select == 'consume') {
                    if (t_rebate_input == '' || t_rebate_input == null) {
                        this.$alert("请输入查询条件！").catch(() => {
                        });
                        console.log("input error!");
                        return false;
                    }
                    //初始化rebateDetail
                    this.rebateDetail = this.init_rebateDetail();
                    //后台交互
                    this.findRebateByConsumeId(t_rebate_input);
                    //等待后台返回数据需要延迟一段时间，业务逻辑要延时处理。用setTimeout(function(),200);
                    var handle = this;	//供setTimeout()使用外层this
                    window.setTimeout(function () {
                        //若没有获取到数据。
                        if (handle.rebateDetail.consumeId == 0) {
                            return false;
                        }
                        //显示对话框
                        handle.showDialogFormVisible_3 = true;
                    }, 200);

                } else if (t_rebate_select == 'card') {
                    if (t_rebate_input == '' || t_rebate_input == null) {
                        this.$alert("请输入查询条件！").catch(() => {
                        });
                        console.log("input error!");
                        return false;
                    }
                    this.findRebateByCardId(t_rebate_input);
                } else if (t_rebate_select == 'referrerCard') {
                    if (t_rebate_input == '' || t_rebate_input == null) {
                        this.$alert("请输入查询条件！").catch(() => {
                        });
                        console.log("input error!");
                        return false;
                    }
                    this.findRebateByReferrerCardId(t_rebate_input);
                } else {
                    this.$alert("请选择查询方式！").catch(() => {
                    });
                    console.log("select error!");
                    return false;
                }
            },

            //-------------------------成本记录响应函数-----------------------------
            //成本记录：”按日期查询“按键响应函数
            Cost_clickDateButton: function (t_costDate) {
                //console.log(t_costDate);		//测试语句
                if (t_costDate == '') {				//之前没有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else if (t_costDate == null) {		//之前有”选择日期后点击查询按钮“的情况，不选择日期直接点击查询按钮
                    this.$alert("查询条件非法，请重新输入！").catch(() => {
                    });
                    console.log("input error!");
                    return false;
                } else {								//选择日期后点击查询按钮
                    var firstDate = t_costDate[0];
                    var lastDate = t_costDate[1];
                    this.findCostByDate(firstDate, lastDate);
                }
            },

            //成本记录：”新增“按键响应函数。1表示"会员卡等级"模块
            clickAddButton: function () {
                //初始化
                this.costDetail.costMoney = 0.00;
                this.costDetail.costDate = '';

                //对话框显示
                this.addDialogFormVisible = true;
            },

            //成本记录-新增对话框：弹出框右上角"×"号、框内“取消”按钮响应函数
            resetAddForm: function (formName) {
                //对话框隐藏
                this.addDialogFormVisible = false;
                //清除表单
                this.$refs[formName].resetFields();
            },

            //成本记录-新增对话框：框内“确定”按钮响应函数
            addForm: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //业务处理
                        //判断该天的成本是否存在
                        var t_addDay = '';
                        for (var i = 0; i < this.costDetails.length; i++) {
                            if (this.costDetail.costDate == this.costDetails[i].costDate) {
                                t_addDay = this.costDetails[i].costDate;
                            }
                        }
                        if (t_addDay != '') {
                            this.$alert("当天成本已存在！").catch(() => {
                            });
                            console.log("today cost is exsit!");
                            return false;
                        } else {
                            this.costDetail.costId = null;
                            this.saveCostDetail(this.costDetail);
                            //this.$alert("提交成功").catch(() => {});
                            console.log("submit success!");
                            this.addDialogFormVisible = false;
                        }
                    } else {
                        return false;
                    }
                });
            },

            //成本记录：”修改“按键响应函数。1表示"会员卡等级"模块
            clickEditButton: function (t_cost) {
                //初始化
                this.costDetail.costId = t_cost.costId;
                this.costDetail.costMoney = t_cost.costMoney;
                this.costDetail.costDate = t_cost.costDate;

                //对话框显示
                this.editDialogFormVisible = true;
            },

            //成本记录-修改对话框：弹出框右上角"×"号、框内“取消”按钮响应函数
            resetEditForm: function (formName) {
                //对话框隐藏
                this.editDialogFormVisible = false;
                //清除表单
                this.$refs[formName].resetFields();
            },

            //成本记录-修改对话框：框内“确定”按钮响应函数
            editForm: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //业务处理
                        this.saveCostDetail(this.costDetail);
                        //this.$alert("提交成功").catch(() => {});
                        console.log("submit success!");
                        this.editDialogFormVisible = false;

                    } else {
                        return false;
                    }
                });
            },

            //成本记录：”删除“按键响应函数
            Cost_clickDeleteButton: function (t_costId) {
                this.$confirm('确定要删除吗?', '提示').then(() => {
                    this.deleteCostDetail(t_costId);
                }).catch(() => {
                });
            }
        }
    });
    v1.loading();
}