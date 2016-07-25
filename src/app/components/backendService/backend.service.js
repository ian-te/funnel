angular.module('backendModule', []).factory('backend', backendModule);


/** @ngInject */
function backendModule($q, $timeout) {

    var service = {
        get: function () {
            var deferred = $q.defer();
            var mockData = [
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "0-10",
                    "count": "119000",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "20-30",
                    "count": "216127",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "30-40",
                    "count": "88449",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "0-10",
                    "count": "106820",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "20-30",
                    "count": "240335",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "30-40",
                    "count": "87343",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "0-10",
                    "count": "107470",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "20-30",
                    "count": "203372",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "30-40",
                    "count": "86933",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "0-10",
                    "count": "102947",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "20-30",
                    "count": "228070",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "30-40",
                    "count": "77570",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "0-10",
                    "count": "108280",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "20-30",
                    "count": "218662",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "30-40",
                    "count": "76852",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "0-10",
                    "count": "113381",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "20-30",
                    "count": "223172",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "United States",
                    "session": "30-40",
                    "count": "72370",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "87163",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "175093",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "71826",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "94588",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "183978",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "64144",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "91770",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "176102",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "70588",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "93247",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "167264",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "57471",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "83071",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "172668",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "69039",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "81507",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "178451",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "57439",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "0-10",
                    "count": "157510",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "20-30",
                    "count": "320839",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "30-40",
                    "count": "132781",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "0-10",
                    "count": "158627",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "20-30",
                    "count": "341723",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "30-40",
                    "count": "119212",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "0-10",
                    "count": "160474",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "20-30",
                    "count": "318358",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "30-40",
                    "count": "124723",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "0-10",
                    "count": "163257",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "20-30",
                    "count": "345304",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "30-40",
                    "count": "112877",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "0-10",
                    "count": "154233",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "20-30",
                    "count": "348597",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "30-40",
                    "count": "125591",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "0-10",
                    "count": "174692",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "20-30",
                    "count": "330588",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "China",
                    "session": "30-40",
                    "count": "118563",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "United States",
                    "session": "0-10",
                    "count": "109637",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "United States",
                    "session": "20-30",
                    "count": "217538",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "United States",
                    "session": "30-40",
                    "count": "84980",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "United States",
                    "session": "0-10",
                    "count": "109989",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "United States",
                    "session": "20-30",
                    "count": "222297",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "United States",
                    "session": "30-40",
                    "count": "71736",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "United States",
                    "session": "0-10",
                    "count": "113624",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "United States",
                    "session": "20-30",
                    "count": "206488",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "United States",
                    "session": "30-40",
                    "count": "79173",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "United States",
                    "session": "0-10",
                    "count": "111264",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "United States",
                    "session": "20-30",
                    "count": "240041",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "United States",
                    "session": "30-40",
                    "count": "87371",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "United States",
                    "session": "0-10",
                    "count": "100008",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "United States",
                    "session": "20-30",
                    "count": "232048",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "United States",
                    "session": "30-40",
                    "count": "79763",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "United States",
                    "session": "0-10",
                    "count": "108013",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "United States",
                    "session": "20-30",
                    "count": "204759",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "United States",
                    "session": "30-40",
                    "count": "71416",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "85973",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "168608",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "60530",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "91261",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "176467",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "57197",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "89443",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "176858",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "69475",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "80889",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "186322",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "68413",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "81066",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "186672",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "67148",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "88015",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "161667",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "59433",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "China",
                    "session": "0-10",
                    "count": "164546",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "China",
                    "session": "20-30",
                    "count": "371676",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "China",
                    "session": "30-40",
                    "count": "119576",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "China",
                    "session": "0-10",
                    "count": "177980",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "China",
                    "session": "20-30",
                    "count": "352349",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "China",
                    "session": "30-40",
                    "count": "110587",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "China",
                    "session": "0-10",
                    "count": "168585",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "China",
                    "session": "20-30",
                    "count": "303476",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "China",
                    "session": "30-40",
                    "count": "108741",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "China",
                    "session": "0-10",
                    "count": "153279",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "China",
                    "session": "20-30",
                    "count": "367129",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "China",
                    "session": "30-40",
                    "count": "120061",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "China",
                    "session": "0-10",
                    "count": "150140",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "China",
                    "session": "20-30",
                    "count": "316203",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "China",
                    "session": "30-40",
                    "count": "131879",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "China",
                    "session": "0-10",
                    "count": "171459",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "China",
                    "session": "20-30",
                    "count": "316653",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "China",
                    "session": "30-40",
                    "count": "124328",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "0-10",
                    "count": "109315",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "20-30",
                    "count": "227127",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "30-40",
                    "count": "71038",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "0-10",
                    "count": "106830",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "20-30",
                    "count": "249032",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "30-40",
                    "count": "75193",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "0-10",
                    "count": "115885",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "20-30",
                    "count": "201496",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "30-40",
                    "count": "80012",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "0-10",
                    "count": "111684",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "20-30",
                    "count": "237901",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "30-40",
                    "count": "85707",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "0-10",
                    "count": "104937",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "20-30",
                    "count": "203837",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "30-40",
                    "count": "77845",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "0-10",
                    "count": "113421",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "20-30",
                    "count": "247896",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "United States",
                    "session": "30-40",
                    "count": "74662",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "92952",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "175055",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "64826",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "83603",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "182088",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "58037",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "83697",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "174865",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "71094",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "85212",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "195608",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "69351",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "82968",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "196402",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "63043",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "0-10",
                    "count": "84463",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "20-30",
                    "count": "165705",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "session": "30-40",
                    "count": "56773",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "0-10",
                    "count": "150503",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "20-30",
                    "count": "352431",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "30-40",
                    "count": "129695",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "0-10",
                    "count": "175476",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "20-30",
                    "count": "331432",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "30-40",
                    "count": "119997",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "0-10",
                    "count": "159993",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "20-30",
                    "count": "369305",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "30-40",
                    "count": "134161",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "0-10",
                    "count": "166394",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "20-30",
                    "count": "354240",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "30-40",
                    "count": "117894",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "0-10",
                    "count": "150098",
                    "source": "search",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "20-30",
                    "count": "310498",
                    "source": "facebook",
                    "action": "visit"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "30-40",
                    "count": "118915",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "0-10",
                    "count": "171761",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "20-30",
                    "count": "303387",
                    "source": "email",
                    "action": "visit"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "China",
                    "session": "30-40",
                    "count": "113148",
                    "source": "twitter",
                    "action": "visit"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Windows",
                    "count": "59500",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Linux",
                    "count": "86450.8",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "53069.4",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Windows",
                    "count": "53410",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Linux",
                    "count": "96134",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "52405.8",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Windows",
                    "count": "53735",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Linux",
                    "count": "81348.8",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "52159.8",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Windows",
                    "count": "51473.5",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Linux",
                    "count": "91228",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "46542",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Windows",
                    "count": "54140",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Linux",
                    "count": "87464.8",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "46111.2",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Windows",
                    "count": "56690.5",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Linux",
                    "count": "89268.8",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "43422",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "43581.5",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "70037.2",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "43095.6",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "47294",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "73591.2",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "38486.4",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "45885",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "70440.8",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "42352.8",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "46623.5",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "66905.6",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "34482.6",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "41535.5",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "69067.2",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "41423.4",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "40753.5",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "71380.4",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "34463.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Windows",
                    "count": "126008",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Linux",
                    "count": "192503.4",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "106224.8",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Windows",
                    "count": "126901.6",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Linux",
                    "count": "205033.8",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "95369.6",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Windows",
                    "count": "128379.2",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Linux",
                    "count": "191014.8",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "99778.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Windows",
                    "count": "130605.6",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Linux",
                    "count": "207182.4",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "90301.6",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Windows",
                    "count": "123386.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Linux",
                    "count": "209158.2",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "100472.8",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Windows",
                    "count": "139753.6",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Linux",
                    "count": "198352.8",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "94850.4",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Windows",
                    "count": "54818.5",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Linux",
                    "count": "87015.2",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "50988",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Windows",
                    "count": "54994.5",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Linux",
                    "count": "88918.8",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "43041.6",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Windows",
                    "count": "56812",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Linux",
                    "count": "82595.2",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "47503.8",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Windows",
                    "count": "55632",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Linux",
                    "count": "96016.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "52422.6",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Windows",
                    "count": "50004",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Linux",
                    "count": "92819.2",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "47857.8",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Windows",
                    "count": "54006.5",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Linux",
                    "count": "81903.6",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "42849.6",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "42986.5",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "67443.2",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "36318",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "45630.5",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "70586.8",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "34318.2",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "44721.5",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "70743.2",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "41685",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "40444.5",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "74528.8",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "41047.8",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "40533",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "74668.8",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "40288.8",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "44007.5",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "64666.8",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "35659.8",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "China",
                    "os": "Windows",
                    "count": "131636.8",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "China",
                    "os": "Linux",
                    "count": "223005.6",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "95660.8",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "China",
                    "os": "Windows",
                    "count": "142384",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "China",
                    "os": "Linux",
                    "count": "211409.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "88469.6",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "China",
                    "os": "Windows",
                    "count": "134868",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "China",
                    "os": "Linux",
                    "count": "182085.6",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "86992.8",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "China",
                    "os": "Windows",
                    "count": "122623.2",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "China",
                    "os": "Linux",
                    "count": "220277.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "96048.8",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "China",
                    "os": "Windows",
                    "count": "120112",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "China",
                    "os": "Linux",
                    "count": "189721.8",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "105503.2",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "China",
                    "os": "Windows",
                    "count": "137167.2",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "China",
                    "os": "Linux",
                    "count": "189991.8",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "99462.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Windows",
                    "count": "76520.5",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Linux",
                    "count": "45425.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "63934.2",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Windows",
                    "count": "74781",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Linux",
                    "count": "49806.4",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "67673.7",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Windows",
                    "count": "81119.5",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Linux",
                    "count": "40299.2",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "72010.8",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Windows",
                    "count": "78178.8",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Linux",
                    "count": "47580.2",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "77136.3",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Windows",
                    "count": "73455.9",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Linux",
                    "count": "40767.4",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "70060.5",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Windows",
                    "count": "79394.7",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Linux",
                    "count": "49579.2",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "United States",
                    "os": "Mac OS",
                    "count": "67195.8",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "65066.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "35011",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "58343.4",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "58522.1",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "36417.6",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "52233.3",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "58587.9",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "34973",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "63984.6",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "59648.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "39121.6",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "62415.9",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "58077.6",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "39280.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "56738.7",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Windows",
                    "count": "59124.1",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Linux",
                    "count": "33141",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "os": "Mac OS",
                    "count": "51095.7",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Windows",
                    "count": "105352.1",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Linux",
                    "count": "70486.2",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "116725.5",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Windows",
                    "count": "122833.2",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Linux",
                    "count": "66286.4",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "107997.3",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Windows",
                    "count": "111995.1",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Linux",
                    "count": "73861",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "120744.9",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Windows",
                    "count": "116475.8",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Linux",
                    "count": "70848",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "106104.6",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Windows",
                    "count": "105068.6",
                    "source": "search",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Linux",
                    "count": "62099.6",
                    "source": "facebook",
                    "action": "download"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "107023.5",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Windows",
                    "count": "120232.7",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Linux",
                    "count": "60677.4",
                    "source": "email",
                    "action": "download"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "China",
                    "os": "Mac OS",
                    "count": "101833.2",
                    "source": "twitter",
                    "action": "download"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Personal",
                    "count": "23800",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "17290.16",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Personal",
                    "count": "10613.88",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "10682",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Personal",
                    "count": "19226.8",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "10481.16",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Personal",
                    "count": "10747",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "16269.76",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Personal",
                    "count": "10431.96",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "10294.7",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Personal",
                    "count": "18245.6",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "9308.4",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "16242",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "26239.44",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "13833.36",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "17007.15",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "26780.64",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "13026.6",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "13074.45",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "21011.16",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "12928.68",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "14188.2",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "22077.36",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "11545.92",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Personal",
                    "count": "4588.5",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Commercial",
                    "count": "35220.4",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Personal",
                    "count": "4235.28",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Commercial",
                    "count": "23311.75",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Personal",
                    "count": "6690.56",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Commercial",
                    "count": "17241.3",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Personal",
                    "count": "4153.55",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Commercial",
                    "count": "34533.6",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Personal",
                    "count": "4142.34",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Commercial",
                    "count": "20376.75",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Personal",
                    "count": "7138.04",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "ReSharper",
                    "country": "China",
                    "license": "Commercial",
                    "count": "17231.7",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Personal",
                    "count": "50403.2",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "38500.68",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Personal",
                    "count": "42489.92",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "25380.32",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Personal",
                    "count": "82013.52",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "19073.92",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Personal",
                    "count": "51351.68",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "38202.96",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Personal",
                    "count": "39911.36",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "26121.12",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Personal",
                    "count": "82872.96",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "18060.32",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "61693.2",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "104579.1",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "50236.4",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "69876.8",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "99176.4",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "47425.2",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "27409.25",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "43507.6",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "25494",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "27497.25",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "44459.4",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "21520.8",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "China",
                    "license": "Personal",
                    "count": "11362.4",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "Idea",
                    "country": "China",
                    "license": "Commercial",
                    "count": "41297.6",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "China",
                    "license": "Personal",
                    "count": "9500.76",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "Idea",
                    "country": "China",
                    "license": "Commercial",
                    "count": "27816",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "China",
                    "license": "Personal",
                    "count": "19203.28",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "Idea",
                    "country": "China",
                    "license": "Commercial",
                    "count": "26211.3",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "China",
                    "license": "Personal",
                    "count": "10000.8",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "Idea",
                    "country": "China",
                    "license": "Commercial",
                    "count": "46409.6",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "China",
                    "license": "Personal",
                    "count": "9571.56",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "Idea",
                    "country": "China",
                    "license": "Commercial",
                    "count": "27003.25",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "China",
                    "license": "Personal",
                    "count": "16380.72",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "Idea",
                    "country": "China",
                    "license": "Commercial",
                    "count": "21424.8",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Personal",
                    "count": "21493.25",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "13488.64",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Personal",
                    "count": "18159",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "9126.1",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Personal",
                    "count": "35293.4",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "6863.64",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Personal",
                    "count": "22360.75",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "14148.64",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Personal",
                    "count": "20842.5",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "8088.9",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Personal",
                    "count": "37264.4",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "United States",
                    "license": "Commercial",
                    "count": "8209.56",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "24319.8",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "22400.64",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "24173.28",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "13202.25",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "38800.08",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "10697.94",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "78982.08",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "66901.68",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "57396.48",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "42715.2",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Personal",
                    "count": "126845.64",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "Netherland",
                    "license": "Commercial",
                    "count": "26540.88",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Personal",
                    "count": "40460.4",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.04",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Commercial",
                    "count": "18208.56",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Personal",
                    "count": "26097.84",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.05",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Commercial",
                    "count": "12262.32",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Personal",
                    "count": "66083.22",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.06",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Commercial",
                    "count": "9604.88",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Personal",
                    "count": "36033.6",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.07",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Commercial",
                    "count": "18972.18",
                    "source": "twitter",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Personal",
                    "count": "31650.96",
                    "source": "search",
                    "action": "purchase"
                },
                {
                    "date": "15.08",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Commercial",
                    "count": "13716.72",
                    "source": "facebook",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Personal",
                    "count": "56997.54",
                    "source": "email",
                    "action": "purchase"
                },
                {
                    "date": "15.09",
                    "product": "PhpStorm",
                    "country": "China",
                    "license": "Commercial",
                    "count": "9946.24",
                    "source": "twitter",
                    "action": "purchase"
                }
            ];

            $timeout(function(){
                deferred.resolve(mockData)
            }, 1000);
            
            return deferred.promise;
        }
    };
    // returning our service so it can be used
    return service;
}
