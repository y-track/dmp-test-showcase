window.ytrackAsyncInit = function() {
    var _wt1Q = this._wt1Q || [];
    var _y_account = "<Replacer par le bon code>";

    window.Ytrack.init({
        "account" : _y_account,
        "domain_id" : "0006",
        "domain_version" : "2",
        "domain" : "<Remplacer par le bon domain>",
        "parts" : {"8a1b58c": false}
    });

    _wt1Q.setTrackAccept(true);

    var _PM_ID = Ytrack.getParamValue('PMID');
    var _PM_SRC = Ytrack.getParamValue('PMSRC_CAMPAIGN','email');

    if (_PM_ID==''){ 
     _PM_SRC='';
    }

    _wt1Q.push([ "setVisitorParam", "_PmId", _PM_ID ]);
    _wt1Q.push([ "setVisitorParam", "_PmSrc", _PM_SRC ]);
    _wt1Q.push([ "trackPage", { }]);
};

(function() {
    var e = document.createElement("script");
    e.async = true;
    e.src = "//cdn.dmp.y-track.com/" + _y_account + "/v5/tracker.min.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(e, s);
}());