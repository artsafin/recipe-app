(function() {
    angular.module('recipeApp')
        .factory('NotificationService', function($q, $timeout) {
            return {
                add: function(data, time) {
                    if (ionic.Platform.platform() != 'win32') {
                        return $q(function(resolve, reject) {
                            cordova.plugins.notification.local.schedule({
                                id: data.id,
                                icon: 'res://icon.png',
                                smallIcon: 'res://icon.png',
                                title: data.title,
                                text: data.text,
                                at: time,
                                led: 'FFCC44'
                            });

                            cordova.plugins.notification.local.on("trigger", function(notification) {
                                if (notification.id == data.id) {
                                    resolve(data);
                                }
                            });
                        });
                    }

                    return $timeout(function() {
                        console.log('NOTIF FIRE:', data, time);
                    }, 5 * 1000);
                },
                remove: function(id) {
                    if (ionic.Platform.platform() != 'win32') {
                        cordova.plugins.notification.local.cancel(id);
                        return;
                    }

                    console.log('NOTIF REM:', id);
                }
            };
        })
})();