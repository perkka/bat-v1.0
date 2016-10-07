import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { WorkoutProfilePage } from '../workoutprofile/workoutprofile';
import { ProfilePage } from '../profile/profile';
import { ExplorePage } from '../explore/explore';
import { SearchPage } from '../search/search';
export var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = ExplorePage;
        this.tab3Root = WorkoutProfilePage;
        this.tab4Root = SearchPage;
        this.tab5Root = ProfilePage;
    }
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [];
    return TabsPage;
}());
