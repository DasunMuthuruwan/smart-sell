/*!
 * Copyright 2019 Mubasher Financial Services (DIFC) Limited. All rights reserved.
 *
 * Unauthorized access, copying, publishing, sharing, reuse of algorithms, concepts, design patterns
 * and code level demonstrations are strictly prohibited without any written approval of
 * Mubasher Financial Services (DIFC) Limited.
 */

import { Routes } from '@angular/router';
import { AppInitGuard } from './app-init.guard';

export const appRoutes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '' },
	{ path: '',
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'public' },
			{ path: 'public', canActivate: [AppInitGuard], loadChildren: () => import('./widgets/public-widgets/public-widgets.module').then(module => module.PublicWidgetsModule) },
			// { path: 'secure', canActivate: [CcpAuthGuard, CcpAppInitGuard], component: AppSecureLayoutComponent,
			// loadChildren: () => import('../app-widgets/secure-widgets/secure-widgets.module').then(m => m.SecureWidgetsModule) },
			{ path: '**', pathMatch: 'full', redirectTo: 'public' },
		],
	},

];
