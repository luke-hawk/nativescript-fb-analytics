declare module com {
	export module facebook {
		export class AccessToken {
			public static class: java.lang.Class<com.facebook.AccessToken>;
			public static ACCESS_TOKEN_KEY: string;
			public static EXPIRES_IN_KEY: string;
			public static USER_ID_KEY: string;
			public static DATA_ACCESS_EXPIRATION_TIME: string;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AccessToken>;
			public equals(param0: any): boolean;
			public getPermissions(): java.util.Set<string>;
			public isDataAccessExpired(): boolean;
			public constructor(param0: string, param1: string, param2: string, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: java.util.Collection<string>, param6: com.facebook.AccessTokenSource, param7: java.util.Date, param8: java.util.Date, param9: java.util.Date, param10: string);
			public static refreshCurrentAccessTokenAsync(): void;
			public getExpires(): java.util.Date;
			public getUserId(): string;
			public isExpired(): boolean;
			public static isCurrentAccessTokenActive(): boolean;
			public static createFromNativeLinkingIntent(param0: globalAndroid.content.Intent, param1: string, param2: com.facebook.AccessToken.AccessTokenCreationCallback): void;
			public constructor(param0: string, param1: string, param2: string, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: java.util.Collection<string>, param6: com.facebook.AccessTokenSource, param7: java.util.Date, param8: java.util.Date, param9: java.util.Date);
			public getDeclinedPermissions(): java.util.Set<string>;
			public getGraphDomain(): string;
			public getToken(): string;
			public getExpiredPermissions(): java.util.Set<string>;
			public static isDataAccessActive(): boolean;
			public static refreshCurrentAccessTokenAsync(param0: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
			public getApplicationId(): string;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public toString(): string;
			public getSource(): com.facebook.AccessTokenSource;
			public getLastRefresh(): java.util.Date;
			public describeContents(): number;
			public static getCurrentAccessToken(): com.facebook.AccessToken;
			public static setCurrentAccessToken(param0: com.facebook.AccessToken): void;
			public getDataAccessExpirationTime(): java.util.Date;
			public hashCode(): number;
		}
		export module AccessToken {
			export class AccessTokenCreationCallback {
				public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenCreationCallback>;
				/**
				 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenCreationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: com.facebook.AccessToken): void;
					onError(param0: com.facebook.FacebookException): void;
				});
				public constructor();
				public onSuccess(param0: com.facebook.AccessToken): void;
				public onError(param0: com.facebook.FacebookException): void;
			}
			export class AccessTokenRefreshCallback {
				public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenRefreshCallback>;
				/**
				 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					OnTokenRefreshed(param0: com.facebook.AccessToken): void;
					OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
				});
				public constructor();
				public OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
				public OnTokenRefreshed(param0: com.facebook.AccessToken): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenCache {
			public static class: java.lang.Class<com.facebook.AccessTokenCache>;
			public clear(): void;
			public constructor();
			public load(): com.facebook.AccessToken;
			public save(param0: com.facebook.AccessToken): void;
		}
		export module AccessTokenCache {
			export class SharedPreferencesTokenCachingStrategyFactory {
				public static class: java.lang.Class<com.facebook.AccessTokenCache.SharedPreferencesTokenCachingStrategyFactory>;
				public create(): com.facebook.LegacyTokenHelper;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenManager {
			public static class: java.lang.Class<com.facebook.AccessTokenManager>;
			public static TAG: string;
			public static ACTION_CURRENT_ACCESS_TOKEN_CHANGED: string;
			public static EXTRA_OLD_ACCESS_TOKEN: string;
			public static EXTRA_NEW_ACCESS_TOKEN: string;
			public static SHARED_PREFERENCES_NAME: string;
		}
		export module AccessTokenManager {
			export class RefreshResult {
				public static class: java.lang.Class<com.facebook.AccessTokenManager.RefreshResult>;
				public accessToken: string;
				public expiresAt: number;
				public dataAccessExpirationTime: java.lang.Long;
				public graphDomain: string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenSource {
			public static class: java.lang.Class<com.facebook.AccessTokenSource>;
			public static NONE: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_WEB: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_NATIVE: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_SERVICE: com.facebook.AccessTokenSource;
			public static WEB_VIEW: com.facebook.AccessTokenSource;
			public static CHROME_CUSTOM_TAB: com.facebook.AccessTokenSource;
			public static TEST_USER: com.facebook.AccessTokenSource;
			public static CLIENT_TOKEN: com.facebook.AccessTokenSource;
			public static DEVICE_AUTH: com.facebook.AccessTokenSource;
			public static values(): native.Array<com.facebook.AccessTokenSource>;
			public static valueOf(param0: string): com.facebook.AccessTokenSource;
		}
	}
}

declare module com {
	export module facebook {
		export class CallbackManager {
			public static class: java.lang.Class<com.facebook.CallbackManager>;
			/**
			 * Constructs a new instance of the com.facebook.CallbackManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
			});
			public constructor();
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
		}
		export module CallbackManager {
			export class Factory {
				public static class: java.lang.Class<com.facebook.CallbackManager.Factory>;
				public static create(): com.facebook.CallbackManager;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export class CurrentAccessTokenExpirationBroadcastReceiver {
			public static class: java.lang.Class<com.facebook.CurrentAccessTokenExpirationBroadcastReceiver>;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookBroadcastReceiver {
			public static class: java.lang.Class<com.facebook.FacebookBroadcastReceiver>;
			public onFailedAppCall(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
			public onSuccessfulAppCall(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookContentProvider {
			public static class: java.lang.Class<com.facebook.FacebookContentProvider>;
			public onCreate(): boolean;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public openFile(param0: globalAndroid.net.Uri, param1: string): globalAndroid.os.ParcelFileDescriptor;
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
			public constructor();
			public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
			public static getAttachmentUrl(param0: string, param1: java.util.UUID, param2: string): string;
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public getType(param0: globalAndroid.net.Uri): string;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookException>;
			public toString(): string;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookGraphResponseException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookGraphResponseException>;
			public constructor(param0: com.facebook.GraphResponse, param1: string);
			public toString(): string;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public getGraphResponse(): com.facebook.GraphResponse;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookOperationCanceledException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookOperationCanceledException>;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookRequestError {
			public static class: java.lang.Class<com.facebook.FacebookRequestError>;
			public static INVALID_ERROR_CODE: number;
			public static INVALID_HTTP_STATUS_CODE: number;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.FacebookRequestError>;
			public constructor(param0: number, param1: string, param2: string);
			public getErrorCode(): number;
			public getCategory(): com.facebook.FacebookRequestError.Category;
			public getConnection(): java.net.HttpURLConnection;
			public getErrorUserMessage(): string;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public getBatchRequestResult(): any;
			public getRequestResult(): org.json.JSONObject;
			public getSubErrorCode(): number;
			public getErrorMessage(): string;
			public toString(): string;
			public describeContents(): number;
			public getErrorType(): string;
			public getErrorRecoveryMessage(): string;
			public getErrorUserTitle(): string;
			public getRequestStatusCode(): number;
			public getRequestResultBody(): org.json.JSONObject;
			public getException(): com.facebook.FacebookException;
		}
		export module FacebookRequestError {
			export class Category {
				public static class: java.lang.Class<com.facebook.FacebookRequestError.Category>;
				public static LOGIN_RECOVERABLE: com.facebook.FacebookRequestError.Category;
				public static OTHER: com.facebook.FacebookRequestError.Category;
				public static TRANSIENT: com.facebook.FacebookRequestError.Category;
				public static values(): native.Array<com.facebook.FacebookRequestError.Category>;
				public static valueOf(param0: string): com.facebook.FacebookRequestError.Category;
			}
			export class Range {
				public static class: java.lang.Class<com.facebook.FacebookRequestError.Range>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdk {
			public static class: java.lang.Class<com.facebook.FacebookSdk>;
			public static APP_EVENT_PREFERENCES: string;
			public static APPLICATION_ID_PROPERTY: string;
			public static APPLICATION_NAME_PROPERTY: string;
			public static CLIENT_TOKEN_PROPERTY: string;
			public static WEB_DIALOG_THEME: string;
			public static AUTO_INIT_ENABLED_PROPERTY: string;
			public static AUTO_LOG_APP_EVENTS_ENABLED_PROPERTY: string;
			public static CODELESS_DEBUG_LOG_ENABLED_PROPERTY: string;
			public static ADVERTISER_ID_COLLECTION_ENABLED_PROPERTY: string;
			public static CALLBACK_OFFSET_PROPERTY: string;
			/** @deprecated */
			public static sdkInitialize(param0: globalAndroid.content.Context, param1: number): void;
			public static publishInstallAsync(param0: globalAndroid.content.Context, param1: string): void;
			public static setFacebookDomain(param0: string): void;
			public static getCodelessDebugLogEnabled(): boolean;
			public static clearLoggingBehaviors(): void;
			public static getApplicationSignature(param0: globalAndroid.content.Context): string;
			public static setExecutor(param0: java.util.concurrent.Executor): void;
			public static setApplicationName(param0: string): void;
			public static getCodelessSetupEnabled(): boolean;
			public static setAutoLogAppEventsEnabled(param0: boolean): void;
			public static setOnProgressThreshold(param0: number): void;
			public static isInitialized(): boolean;
			public static setLegacyTokenUpgradeSupported(param0: boolean): void;
			public static getApplicationId(): string;
			public constructor();
			public static setAutoInitEnabled(param0: boolean): void;
			public static setAdvertiserIDCollectionEnabled(param0: boolean): void;
			public static addLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
			public static getAutoInitEnabled(): boolean;
			public static setCodelessDebugLogEnabled(param0: boolean): void;
			public static getAutoLogAppEventsEnabled(): boolean;
			public static fullyInitialize(): void;
			public static setCacheDir(param0: java.io.File): void;
			/** @deprecated */
			public static sdkInitialize(param0: globalAndroid.content.Context): void;
			/** @deprecated */
			public static sdkInitialize(param0: globalAndroid.content.Context, param1: com.facebook.FacebookSdk.InitializeCallback): void;
			public static setLimitEventAndDataUsage(param0: globalAndroid.content.Context, param1: boolean): void;
			public static getExecutor(): java.util.concurrent.Executor;
			public static isDebugEnabled(): boolean;
			public static setIsDebugEnabled(param0: boolean): void;
			public static getGraphApiVersion(): string;
			public static getAdvertiserIDCollectionEnabled(): boolean;
			/** @deprecated */
			public static sdkInitialize(param0: globalAndroid.content.Context, param1: number, param2: com.facebook.FacebookSdk.InitializeCallback): void;
			public static isFullyInitialized(): boolean;
			public static getCallbackRequestCodeOffset(): number;
			public static isFacebookRequestCode(param0: number): boolean;
			public static getOnProgressThreshold(): number;
			public static setGraphApiVersion(param0: string): void;
			public static getLimitEventAndDataUsage(param0: globalAndroid.content.Context): boolean;
			public static getApplicationContext(): globalAndroid.content.Context;
			public static getLoggingBehaviors(): java.util.Set<com.facebook.LoggingBehavior>;
			public static getApplicationName(): string;
			public static getFacebookDomain(): string;
			public static setApplicationId(param0: string): void;
			public static getClientToken(): string;
			public static setClientToken(param0: string): void;
			public static getCacheDir(): java.io.File;
			public static isLoggingBehaviorEnabled(param0: com.facebook.LoggingBehavior): boolean;
			public static getSdkVersion(): string;
			public static removeLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
			public static isLegacyTokenUpgradeSupported(): boolean;
		}
		export module FacebookSdk {
			export class InitializeCallback {
				public static class: java.lang.Class<com.facebook.FacebookSdk.InitializeCallback>;
				/**
				 * Constructs a new instance of the com.facebook.FacebookSdk$InitializeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onInitialized(): void;
				});
				public constructor();
				public onInitialized(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdkNotInitializedException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookSdkNotInitializedException>;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdkVersion {
			public static class: java.lang.Class<com.facebook.FacebookSdkVersion>;
			public static BUILD: string;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookServiceException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookServiceException>;
			public toString(): string;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: com.facebook.FacebookRequestError, param1: string);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public getRequestError(): com.facebook.FacebookRequestError;
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequest {
			public static class: java.lang.Class<com.facebook.GraphRequest>;
			public static MAXIMUM_BATCH_SIZE: number;
			public static TAG: string;
			public static ACCESS_TOKEN_PARAM: string;
			public static FIELDS_PARAM: string;
			public setVersion(param0: string): void;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback, param5: string);
			public static executeBatchAndWait(param0: native.Array<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
			public static executeConnectionAsync(param0: globalAndroid.os.Handler, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public getCallback(): com.facebook.GraphRequest.Callback;
			public static newMyFriendsRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
			public static toHttpConnection(param0: native.Array<com.facebook.GraphRequest>): java.net.HttpURLConnection;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.graphics.Bitmap, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public setCallback(param0: com.facebook.GraphRequest.Callback): void;
			public getTag(): any;
			public static toHttpConnection(param0: java.util.Collection<com.facebook.GraphRequest>): java.net.HttpURLConnection;
			public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
			public getParameters(): globalAndroid.os.Bundle;
			public constructor(param0: com.facebook.AccessToken, param1: string);
			public getBatchEntryDependsOn(): string;
			public constructor();
			public static executeBatchAsync(param0: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public getGraphObject(): org.json.JSONObject;
			public static setDefaultBatchApplicationId(param0: string): void;
			public static executeAndWait(param0: com.facebook.GraphRequest): com.facebook.GraphResponse;
			public static executeConnectionAsync(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public static getDefaultBatchApplicationId(): string;
			public static newGraphPathRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static executeBatchAndWait(param0: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
			public static newPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public executeAndWait(): com.facebook.GraphResponse;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.net.Uri, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static newMeRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONObjectCallback): com.facebook.GraphRequest;
			public static newDeleteObjectRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public setBatchEntryName(param0: string): void;
			public setGraphPath(param0: string): void;
			public setParameters(param0: globalAndroid.os.Bundle): void;
			public static executeBatchAsync(param0: native.Array<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
			public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
			public getBatchEntryOmitResultOnSuccess(): boolean;
			public static toHttpConnection(param0: com.facebook.GraphRequestBatch): java.net.HttpURLConnection;
			public setSkipClientToken(param0: boolean): void;
			public setTag(param0: any): void;
			public setBatchEntryOmitResultOnSuccess(param0: boolean): void;
			public static executeBatchAndWait(param0: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod);
			public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public executeAsync(): com.facebook.GraphRequestAsyncTask;
			public static executeBatchAsync(param0: java.util.Collection<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
			public setAccessToken(param0: com.facebook.AccessToken): void;
			public setHttpMethod(param0: com.facebook.HttpMethod): void;
			public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: string, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public toString(): string;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback);
			public setGraphObject(param0: org.json.JSONObject): void;
			public getHttpMethod(): com.facebook.HttpMethod;
			public getAccessToken(): com.facebook.AccessToken;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: java.io.File, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public getVersion(): string;
			public getBatchEntryName(): string;
			public getGraphPath(): string;
			public setBatchEntryDependsOn(param0: string): void;
			public static newPlacesSearchRequest(param0: com.facebook.AccessToken, param1: globalAndroid.location.Location, param2: number, param3: number, param4: string, param5: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
		}
		export module GraphRequest {
			export class Attachment {
				public static class: java.lang.Class<com.facebook.GraphRequest.Attachment>;
				public constructor(param0: com.facebook.GraphRequest, param1: any);
				public getRequest(): com.facebook.GraphRequest;
				public getValue(): any;
			}
			export class Callback {
				public static class: java.lang.Class<com.facebook.GraphRequest.Callback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompleted(param0: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: com.facebook.GraphResponse): void;
			}
			export class GraphJSONArrayCallback {
				public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONArrayCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONArrayCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
			}
			export class GraphJSONObjectCallback {
				public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONObjectCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONObjectCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
			}
			export class KeyValueSerializer {
				public static class: java.lang.Class<com.facebook.GraphRequest.KeyValueSerializer>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$KeyValueSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					writeString(param0: string, param1: string): void;
				});
				public constructor();
				public writeString(param0: string, param1: string): void;
			}
			export class OnProgressCallback extends com.facebook.GraphRequest.Callback {
				public static class: java.lang.Class<com.facebook.GraphRequest.OnProgressCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$OnProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onProgress(param0: number, param1: number): void;
					onCompleted(param0: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: com.facebook.GraphResponse): void;
				public onProgress(param0: number, param1: number): void;
			}
			export class ParcelableResourceWithMimeType<RESOURCE>  extends globalAndroid.os.Parcelable {
				public static class: java.lang.Class<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: any, param1: string);
				public getResource(): any;
				public getMimeType(): string;
				public describeContents(): number;
			}
			export class Serializer extends com.facebook.GraphRequest.KeyValueSerializer {
				public static class: java.lang.Class<com.facebook.GraphRequest.Serializer>;
				public writeString(param0: string, param1: string): void;
				public writeBytes(param0: string, param1: native.Array<number>): void;
				public writeLine(param0: string, param1: native.Array<any>): void;
				public writeFile(param0: string, param1: globalAndroid.os.ParcelFileDescriptor, param2: string): void;
				public write(param0: string, param1: native.Array<any>): void;
				public writeBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): void;
				public writeContentDisposition(param0: string, param1: string, param2: string): void;
				public writeRecordBoundary(): void;
				public constructor(param0: java.io.OutputStream, param1: com.facebook.internal.Logger, param2: boolean);
				public writeRequestsAsJson(param0: string, param1: org.json.JSONArray, param2: java.util.Collection<com.facebook.GraphRequest>): void;
				public writeContentUri(param0: string, param1: globalAndroid.net.Uri, param2: string): void;
				public writeObject(param0: string, param1: any, param2: com.facebook.GraphRequest): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequestAsyncTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.util.List<com.facebook.GraphResponse>> {
			public static class: java.lang.Class<com.facebook.GraphRequestAsyncTask>;
			public constructor(param0: java.net.HttpURLConnection, param1: native.Array<com.facebook.GraphRequest>);
			public constructor(param0: java.net.HttpURLConnection, param1: java.util.Collection<com.facebook.GraphRequest>);
			public constructor(param0: native.Array<com.facebook.GraphRequest>);
			public toString(): string;
			public onPostExecute(param0: java.util.List<com.facebook.GraphResponse>): void;
			public getException(): java.lang.Exception;
			public doInBackground(param0: native.Array<java.lang.Void>): java.util.List<com.facebook.GraphResponse>;
			public constructor(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch);
			public getRequests(): com.facebook.GraphRequestBatch;
			public onPreExecute(): void;
			public constructor(param0: java.util.Collection<com.facebook.GraphRequest>);
			public constructor(param0: com.facebook.GraphRequestBatch);
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequestBatch extends java.util.AbstractList<com.facebook.GraphRequest> {
			public static class: java.lang.Class<com.facebook.GraphRequestBatch>;
			public clear(): void;
			public setTimeout(param0: number): void;
			public constructor(param0: native.Array<com.facebook.GraphRequest>);
			public get(param0: number): com.facebook.GraphRequest;
			public size(): number;
			public add(param0: number, param1: com.facebook.GraphRequest): void;
			public add(param0: com.facebook.GraphRequest): boolean;
			public removeCallback(param0: com.facebook.GraphRequestBatch.Callback): void;
			public constructor();
			public executeAsync(): com.facebook.GraphRequestAsyncTask;
			public constructor(param0: java.util.Collection<com.facebook.GraphRequest>);
			public setBatchApplicationId(param0: string): void;
			public addCallback(param0: com.facebook.GraphRequestBatch.Callback): void;
			public remove(param0: number): com.facebook.GraphRequest;
			public set(param0: number, param1: com.facebook.GraphRequest): com.facebook.GraphRequest;
			public getTimeout(): number;
			public constructor(param0: com.facebook.GraphRequestBatch);
			public executeAndWait(): java.util.List<com.facebook.GraphResponse>;
			public getBatchApplicationId(): string;
		}
		export module GraphRequestBatch {
			export class Callback {
				public static class: java.lang.Class<com.facebook.GraphRequestBatch.Callback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequestBatch$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
				});
				public constructor();
				public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
			}
			export class OnProgressCallback extends com.facebook.GraphRequestBatch.Callback {
				public static class: java.lang.Class<com.facebook.GraphRequestBatch.OnProgressCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequestBatch$OnProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void;
					onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
				});
				public constructor();
				public onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void;
				public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphResponse {
			public static class: java.lang.Class<com.facebook.GraphResponse>;
			public static NON_JSON_RESPONSE_PROPERTY: string;
			public static SUCCESS_KEY: string;
			public getRequestForPagedResults(param0: com.facebook.GraphResponse.PagingDirection): com.facebook.GraphRequest;
			public getJSONArray(): org.json.JSONArray;
			public getRequest(): com.facebook.GraphRequest;
			public toString(): string;
			public getConnection(): java.net.HttpURLConnection;
			public getRawResponse(): string;
			public getJSONObject(): org.json.JSONObject;
			public getError(): com.facebook.FacebookRequestError;
		}
		export module GraphResponse {
			export class PagingDirection {
				public static class: java.lang.Class<com.facebook.GraphResponse.PagingDirection>;
				public static NEXT: com.facebook.GraphResponse.PagingDirection;
				public static PREVIOUS: com.facebook.GraphResponse.PagingDirection;
				public static values(): native.Array<com.facebook.GraphResponse.PagingDirection>;
				public static valueOf(param0: string): com.facebook.GraphResponse.PagingDirection;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class HttpMethod {
			public static class: java.lang.Class<com.facebook.HttpMethod>;
			public static GET: com.facebook.HttpMethod;
			public static POST: com.facebook.HttpMethod;
			public static DELETE: com.facebook.HttpMethod;
			public static valueOf(param0: string): com.facebook.HttpMethod;
			public static values(): native.Array<com.facebook.HttpMethod>;
		}
	}
}

declare module com {
	export module facebook {
		export class LegacyTokenHelper {
			public static class: java.lang.Class<com.facebook.LegacyTokenHelper>;
			public static TOKEN_KEY: string;
			public static EXPIRATION_DATE_KEY: string;
			public static LAST_REFRESH_DATE_KEY: string;
			public static TOKEN_SOURCE_KEY: string;
			public static PERMISSIONS_KEY: string;
			public static DECLINED_PERMISSIONS_KEY: string;
			public static EXPIRED_PERMISSIONS_KEY: string;
			public static APPLICATION_ID_KEY: string;
			public static DEFAULT_CACHE_KEY: string;
			public clear(): void;
			public static putLastRefreshDate(param0: globalAndroid.os.Bundle, param1: java.util.Date): void;
			public static putSource(param0: globalAndroid.os.Bundle, param1: com.facebook.AccessTokenSource): void;
			public static putApplicationId(param0: globalAndroid.os.Bundle, param1: string): void;
			public constructor(param0: globalAndroid.content.Context, param1: string);
			public static putPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
			public static getLastRefreshDate(param0: globalAndroid.os.Bundle): java.util.Date;
			public load(): globalAndroid.os.Bundle;
			public static getToken(param0: globalAndroid.os.Bundle): string;
			public static putExpirationDate(param0: globalAndroid.os.Bundle, param1: java.util.Date): void;
			public static getExpirationDate(param0: globalAndroid.os.Bundle): java.util.Date;
			public static putExpirationMilliseconds(param0: globalAndroid.os.Bundle, param1: number): void;
			public save(param0: globalAndroid.os.Bundle): void;
			public static getApplicationId(param0: globalAndroid.os.Bundle): string;
			public static hasTokenInformation(param0: globalAndroid.os.Bundle): boolean;
			public static getSource(param0: globalAndroid.os.Bundle): com.facebook.AccessTokenSource;
			public static putExpiredPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
			public static putToken(param0: globalAndroid.os.Bundle, param1: string): void;
			public static getPermissions(param0: globalAndroid.os.Bundle): java.util.Set<string>;
			public static getExpirationMilliseconds(param0: globalAndroid.os.Bundle): number;
			public static putLastRefreshMilliseconds(param0: globalAndroid.os.Bundle, param1: number): void;
			public constructor(param0: globalAndroid.content.Context);
			public static getLastRefreshMilliseconds(param0: globalAndroid.os.Bundle): number;
			public static putDeclinedPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
		}
	}
}

declare module com {
	export module facebook {
		export class LoggingBehavior {
			public static class: java.lang.Class<com.facebook.LoggingBehavior>;
			public static REQUESTS: com.facebook.LoggingBehavior;
			public static INCLUDE_ACCESS_TOKENS: com.facebook.LoggingBehavior;
			public static INCLUDE_RAW_RESPONSES: com.facebook.LoggingBehavior;
			public static CACHE: com.facebook.LoggingBehavior;
			public static APP_EVENTS: com.facebook.LoggingBehavior;
			public static DEVELOPER_ERRORS: com.facebook.LoggingBehavior;
			public static GRAPH_API_DEBUG_WARNING: com.facebook.LoggingBehavior;
			public static GRAPH_API_DEBUG_INFO: com.facebook.LoggingBehavior;
			public static values(): native.Array<com.facebook.LoggingBehavior>;
			public static valueOf(param0: string): com.facebook.LoggingBehavior;
		}
	}
}

declare module com {
	export module facebook {
		export class Profile {
			public static class: java.lang.Class<com.facebook.Profile>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.Profile>;
			public static fetchProfileForCurrentAccessToken(): void;
			public equals(param0: any): boolean;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: globalAndroid.net.Uri);
			public getProfilePictureUri(param0: number, param1: number): globalAndroid.net.Uri;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public getId(): string;
			public getMiddleName(): string;
			public getName(): string;
			public getFirstName(): string;
			public describeContents(): number;
			public getLastName(): string;
			public static getCurrentProfile(): com.facebook.Profile;
			public static setCurrentProfile(param0: com.facebook.Profile): void;
			public getLinkUri(): globalAndroid.net.Uri;
			public hashCode(): number;
		}
	}
}

declare module com {
	export module facebook {
		export class ProfileCache {
			public static class: java.lang.Class<com.facebook.ProfileCache>;
		}
	}
}

declare module com {
	export module facebook {
		export class ProfileManager {
			public static class: java.lang.Class<com.facebook.ProfileManager>;
			public static ACTION_CURRENT_PROFILE_CHANGED: string;
			public static EXTRA_OLD_PROFILE: string;
			public static EXTRA_NEW_PROFILE: string;
		}
	}
}

declare module com {
	export module facebook {
		export abstract class ProfileTracker {
			public static class: java.lang.Class<com.facebook.ProfileTracker>;
			public startTracking(): void;
			public stopTracking(): void;
			public constructor();
			public isTracking(): boolean;
			public onCurrentProfileChanged(param0: com.facebook.Profile, param1: com.facebook.Profile): void;
		}
		export module ProfileTracker {
			export class ProfileBroadcastReceiver {
				public static class: java.lang.Class<com.facebook.ProfileTracker.ProfileBroadcastReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class ProgressNoopOutputStream implements com.facebook.RequestOutputStream {
			public static class: java.lang.Class<com.facebook.ProgressNoopOutputStream>;
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: native.Array<number>): void;
		}
	}
}

declare module com {
	export module facebook {
		export class ProgressOutputStream implements com.facebook.RequestOutputStream {
			public static class: java.lang.Class<com.facebook.ProgressOutputStream>;
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: native.Array<number>): void;
			public close(): void;
		}
	}
}

declare module com {
	export module facebook {
		export class RequestOutputStream {
			public static class: java.lang.Class<com.facebook.RequestOutputStream>;
			/**
			 * Constructs a new instance of the com.facebook.RequestOutputStream interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setCurrentRequest(param0: com.facebook.GraphRequest): void;
			});
			public constructor();
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
		}
	}
}

declare module com {
	export module facebook {
		export class RequestProgress {
			public static class: java.lang.Class<com.facebook.RequestProgress>;
		}
	}
}

declare module com {
	export module facebook {
		export class UserSettingsManager {
			public static class: java.lang.Class<com.facebook.UserSettingsManager>;
			public static initializeIfNotInitialized(): void;
			public static getAutoLogAppEventsEnabled(): boolean;
			public static getCodelessSetupEnabled(): boolean;
			public static setAutoLogAppEventsEnabled(param0: boolean): void;
			public static setAutoInitEnabled(param0: boolean): void;
			public static setAdvertiserIDCollectionEnabled(param0: boolean): void;
			public static getAutoInitEnabled(): boolean;
			public static getAdvertiserIDCollectionEnabled(): boolean;
		}
		export module UserSettingsManager {
			export class UserSetting {
				public static class: java.lang.Class<com.facebook.UserSettingsManager.UserSetting>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AccessTokenAppIdPair {
				public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair>;
				public constructor(param0: com.facebook.AccessToken);
				public getAccessTokenString(): string;
				public hashCode(): number;
				public getApplicationId(): string;
				public equals(param0: any): boolean;
				public constructor(param0: string, param1: string);
			}
			export module AccessTokenAppIdPair {
				export class SerializationProxyV1 {
					public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair.SerializationProxyV1>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AnalyticsUserIDStore {
				public static class: java.lang.Class<com.facebook.appevents.AnalyticsUserIDStore>;
				public static setUserID(param0: string): void;
				public static initStore(): void;
				public static getUserID(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEvent {
				public static class: java.lang.Class<com.facebook.appevents.AppEvent>;
				public constructor(param0: string, param1: string, param2: java.lang.Double, param3: globalAndroid.os.Bundle, param4: boolean, param5: boolean, param6: java.util.UUID);
				public getJSONObject(): org.json.JSONObject;
				public getIsImplicit(): boolean;
				public getName(): string;
				public isChecksumValid(): boolean;
				public toString(): string;
			}
			export module AppEvent {
				export class SerializationProxyV1 {
					public static class: java.lang.Class<com.facebook.appevents.AppEvent.SerializationProxyV1>;
				}
				export class SerializationProxyV2 {
					public static class: java.lang.Class<com.facebook.appevents.AppEvent.SerializationProxyV2>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventCollection {
				public static class: java.lang.Class<com.facebook.appevents.AppEventCollection>;
				public addEvent(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.AppEvent): void;
				public addPersistedEvents(param0: com.facebook.appevents.PersistedEvents): void;
				public get(param0: com.facebook.appevents.AccessTokenAppIdPair): com.facebook.appevents.SessionEventsState;
				public keySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
				public getEventCount(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventQueue {
				public static class: java.lang.Class<com.facebook.appevents.AppEventQueue>;
				public static flush(param0: com.facebook.appevents.FlushReason): void;
				public static add(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.AppEvent): void;
				public static persistToDisk(): void;
				public static getKeySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventStore {
				public static class: java.lang.Class<com.facebook.appevents.AppEventStore>;
				public static persistEvents(param0: com.facebook.appevents.AppEventCollection): void;
				public static readAndClearStore(): com.facebook.appevents.PersistedEvents;
				public static persistEvents(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.SessionEventsState): void;
			}
			export module AppEventStore {
				export class MovedClassObjectInputStream {
					public static class: java.lang.Class<com.facebook.appevents.AppEventStore.MovedClassObjectInputStream>;
					public constructor(param0: java.io.InputStream);
					public readClassDescriptor(): java.io.ObjectStreamClass;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsConstants {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsConstants>;
				public static EVENT_NAME_ACTIVATED_APP: string;
				public static EVENT_NAME_DEACTIVATED_APP: string;
				public static EVENT_NAME_SESSION_INTERRUPTIONS: string;
				public static EVENT_NAME_TIME_BETWEEN_SESSIONS: string;
				public static EVENT_NAME_COMPLETED_REGISTRATION: string;
				public static EVENT_NAME_VIEWED_CONTENT: string;
				public static EVENT_NAME_SEARCHED: string;
				public static EVENT_NAME_RATED: string;
				public static EVENT_NAME_COMPLETED_TUTORIAL: string;
				public static EVENT_NAME_PUSH_TOKEN_OBTAINED: string;
				public static EVENT_NAME_ADDED_TO_CART: string;
				public static EVENT_NAME_ADDED_TO_WISHLIST: string;
				public static EVENT_NAME_INITIATED_CHECKOUT: string;
				public static EVENT_NAME_ADDED_PAYMENT_INFO: string;
				public static EVENT_NAME_PURCHASED: string;
				public static EVENT_NAME_ACHIEVED_LEVEL: string;
				public static EVENT_NAME_UNLOCKED_ACHIEVEMENT: string;
				public static EVENT_NAME_SPENT_CREDITS: string;
				public static EVENT_NAME_CONTACT: string;
				public static EVENT_NAME_CUSTOMIZE_PRODUCT: string;
				public static EVENT_NAME_DONATE: string;
				public static EVENT_NAME_FIND_LOCATION: string;
				public static EVENT_NAME_SCHEDULE: string;
				public static EVENT_NAME_START_TRIAL: string;
				public static EVENT_NAME_SUBMIT_APPLICATION: string;
				public static EVENT_NAME_SUBSCRIBE: string;
				public static EVENT_NAME_AD_IMPRESSION: string;
				public static EVENT_NAME_AD_CLICK: string;
				public static EVENT_NAME_LIVE_STREAMING_START: string;
				public static EVENT_NAME_LIVE_STREAMING_STOP: string;
				public static EVENT_NAME_LIVE_STREAMING_PAUSE: string;
				public static EVENT_NAME_LIVE_STREAMING_RESUME: string;
				public static EVENT_NAME_LIVE_STREAMING_ERROR: string;
				public static EVENT_NAME_LIVE_STREAMING_UPDATE_STATUS: string;
				public static EVENT_NAME_PRODUCT_CATALOG_UPDATE: string;
				public static EVENT_PARAM_LIVE_STREAMING_PREV_STATUS: string;
				public static EVENT_PARAM_LIVE_STREAMING_STATUS: string;
				public static EVENT_PARAM_LIVE_STREAMING_ERROR: string;
				public static EVENT_PARAM_CURRENCY: string;
				public static EVENT_PARAM_REGISTRATION_METHOD: string;
				public static EVENT_PARAM_CONTENT_TYPE: string;
				public static EVENT_PARAM_CONTENT: string;
				public static EVENT_PARAM_CONTENT_ID: string;
				public static EVENT_PARAM_SEARCH_STRING: string;
				public static EVENT_PARAM_SUCCESS: string;
				public static EVENT_PARAM_MAX_RATING_VALUE: string;
				public static EVENT_PARAM_PAYMENT_INFO_AVAILABLE: string;
				public static EVENT_PARAM_NUM_ITEMS: string;
				public static EVENT_PARAM_LEVEL: string;
				public static EVENT_PARAM_DESCRIPTION: string;
				public static EVENT_PARAM_SOURCE_APPLICATION: string;
				public static EVENT_PARAM_PACKAGE_FP: string;
				public static EVENT_PARAM_APP_CERT_HASH: string;
				public static EVENT_PARAM_VALUE_YES: string;
				public static EVENT_PARAM_VALUE_NO: string;
				public static EVENT_PARAM_AD_TYPE: string;
				public static EVENT_PARAM_ORDER_ID: string;
				public static EVENT_PARAM_VALUE_TO_SUM: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_0: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_1: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_2: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_3: string;
				public static EVENT_PARAM_PRODUCT_CUSTOM_LABEL_4: string;
				public static EVENT_PARAM_PRODUCT_CATEGORY: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IOS_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IOS_APP_STORE_ID: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IOS_APP_NAME: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPHONE_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPHONE_APP_STORE_ID: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPHONE_APP_NAME: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPAD_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPAD_APP_STORE_ID: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_IPAD_APP_NAME: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_ANDROID_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_ANDROID_PACKAGE: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_ANDROID_APP_NAME: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_WINDOWS_PHONE_URL: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_WINDOWS_PHONE_APP_ID: string;
				public static EVENT_PARAM_PRODUCT_APPLINK_WINDOWS_PHONE_APP_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsLogger {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger>;
				public static ACTION_APP_EVENTS_FLUSHED: string;
				public static APP_EVENTS_EXTRA_NUM_EVENTS_FLUSHED: string;
				public static APP_EVENTS_EXTRA_FLUSH_RESULT: string;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency): void;
				public static updateUserProperties(param0: globalAndroid.os.Bundle, param1: string, param2: com.facebook.GraphRequest.Callback): void;
				public static initializeLib(param0: globalAndroid.content.Context, param1: string): void;
				public isValidForAccessToken(param0: com.facebook.AccessToken): boolean;
				/** @deprecated */
				public static activateApp(param0: globalAndroid.content.Context): void;
				public logEvent(param0: string, param1: number): void;
				public static newLogger(param0: globalAndroid.content.Context): com.facebook.appevents.AppEventsLogger;
				/** @deprecated */
				public static deactivateApp(param0: globalAndroid.content.Context): void;
				public static setFlushBehavior(param0: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
				public flush(): void;
				/** @deprecated */
				public static deactivateApp(param0: globalAndroid.content.Context, param1: string): void;
				/** @deprecated */
				public static setUserData(param0: globalAndroid.os.Bundle): void;
				public static setUserID(param0: string): void;
				public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
				public logProductItem(param0: string, param1: com.facebook.appevents.AppEventsLogger.ProductAvailability, param2: com.facebook.appevents.AppEventsLogger.ProductCondition, param3: string, param4: string, param5: string, param6: string, param7: java.math.BigDecimal, param8: java.util.Currency, param9: string, param10: string, param11: string, param12: globalAndroid.os.Bundle): void;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public getApplicationId(): string;
				public static activateApp(param0: globalAndroid.app.Application): void;
				public static newLogger(param0: globalAndroid.content.Context, param1: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
				public static getUserID(): string;
				public static clearUserData(): void;
				public logEvent(param0: string): void;
				public static setPushNotificationsRegistrationId(param0: string): void;
				/** @deprecated */
				public static activateApp(param0: globalAndroid.content.Context, param1: string): void;
				/** @deprecated */
				public logSdkEvent(param0: string, param1: java.lang.Double, param2: globalAndroid.os.Bundle): void;
				public static setInstallReferrer(param0: string): void;
				public logPushNotificationOpen(param0: globalAndroid.os.Bundle): void;
				public static augmentWebView(param0: globalAndroid.webkit.WebView, param1: globalAndroid.content.Context): void;
				public logPushNotificationOpen(param0: globalAndroid.os.Bundle, param1: string): void;
				public static getAnonymousAppDeviceGUID(param0: globalAndroid.content.Context): string;
				public logEvent(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
				public static updateUserProperties(param0: globalAndroid.os.Bundle, param1: com.facebook.GraphRequest.Callback): void;
				public static setUserData(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string): void;
				public static newLogger(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
				/** @deprecated */
				public logPurchaseImplicitly(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public static activateApp(param0: globalAndroid.app.Application, param1: string): void;
				public static getUserData(): string;
				public static clearUserID(): void;
				public static onContextStop(): void;
				public static newLogger(param0: globalAndroid.content.Context, param1: string): com.facebook.appevents.AppEventsLogger;
				public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
			}
			export module AppEventsLogger {
				export class FlushBehavior {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
					public static AUTO: com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static EXPLICIT_ONLY: com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static values(): native.Array<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.FlushBehavior;
				}
				export class ProductAvailability {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
					public static IN_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static OUT_OF_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static PREORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static AVALIABLE_FOR_ORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static DISCONTINUED: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static values(): native.Array<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
				}
				export class ProductCondition {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductCondition>;
					public static NEW: com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static REFURBISHED: com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static USED: com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static values(): native.Array<com.facebook.appevents.AppEventsLogger.ProductCondition>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsLoggerImpl {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsLoggerImpl>;
				public getApplicationId(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsManager {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsManager>;
				public static start(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FacebookSDKJSInterface {
				public static class: java.lang.Class<com.facebook.appevents.FacebookSDKJSInterface>;
				public static TAG: string;
				public sendEvent(param0: string, param1: string, param2: string): void;
				public constructor(param0: globalAndroid.content.Context);
				public getProtocol(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FlushReason {
				public static class: java.lang.Class<com.facebook.appevents.FlushReason>;
				public static EXPLICIT: com.facebook.appevents.FlushReason;
				public static TIMER: com.facebook.appevents.FlushReason;
				public static SESSION_CHANGE: com.facebook.appevents.FlushReason;
				public static PERSISTED_EVENTS: com.facebook.appevents.FlushReason;
				public static EVENT_THRESHOLD: com.facebook.appevents.FlushReason;
				public static EAGER_FLUSHING_EVENT: com.facebook.appevents.FlushReason;
				public static values(): native.Array<com.facebook.appevents.FlushReason>;
				public static valueOf(param0: string): com.facebook.appevents.FlushReason;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FlushResult {
				public static class: java.lang.Class<com.facebook.appevents.FlushResult>;
				public static SUCCESS: com.facebook.appevents.FlushResult;
				public static SERVER_ERROR: com.facebook.appevents.FlushResult;
				public static NO_CONNECTIVITY: com.facebook.appevents.FlushResult;
				public static UNKNOWN_ERROR: com.facebook.appevents.FlushResult;
				public static values(): native.Array<com.facebook.appevents.FlushResult>;
				public static valueOf(param0: string): com.facebook.appevents.FlushResult;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FlushStatistics {
				public static class: java.lang.Class<com.facebook.appevents.FlushStatistics>;
				public numEvents: number;
				public result: com.facebook.appevents.FlushResult;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class InternalAppEventsLogger {
				public static class: java.lang.Class<com.facebook.appevents.InternalAppEventsLogger>;
				public logPurchaseImplicitly(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public logEventImplicitly(param0: string, param1: java.math.BigDecimal, param2: java.util.Currency, param3: globalAndroid.os.Bundle): void;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: string, param1: string, param2: com.facebook.AccessToken);
				public static setUserData(param0: globalAndroid.os.Bundle): void;
				public logEvent(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
				public logEventImplicitly(param0: string): void;
				public logEventImplicitly(param0: string, param1: java.lang.Double, param2: globalAndroid.os.Bundle): void;
				public flush(): void;
				public logEventImplicitly(param0: string, param1: globalAndroid.os.Bundle): void;
				public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
				public constructor(param0: globalAndroid.content.Context);
				public logEventFromSE(param0: string, param1: string): void;
				public static setInternalUserData(param0: java.util.Map<string,string>): void;
				public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class PersistedEvents {
				public static class: java.lang.Class<com.facebook.appevents.PersistedEvents>;
				public keySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
				public containsKey(param0: com.facebook.appevents.AccessTokenAppIdPair): boolean;
				public get(param0: com.facebook.appevents.AccessTokenAppIdPair): java.util.List<com.facebook.appevents.AppEvent>;
				public constructor(param0: java.util.HashMap<com.facebook.appevents.AccessTokenAppIdPair,java.util.List<com.facebook.appevents.AppEvent>>);
				public addEvents(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: java.util.List<com.facebook.appevents.AppEvent>): void;
				public constructor();
			}
			export module PersistedEvents {
				export class SerializationProxyV1 {
					public static class: java.lang.Class<com.facebook.appevents.PersistedEvents.SerializationProxyV1>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class SessionEventsState {
				public static class: java.lang.Class<com.facebook.appevents.SessionEventsState>;
				public constructor(param0: com.facebook.internal.AttributionIdentifiers, param1: string);
				public clearInFlightAndStats(param0: boolean): void;
				public addEvent(param0: com.facebook.appevents.AppEvent): void;
				public populateRequest(param0: com.facebook.GraphRequest, param1: globalAndroid.content.Context, param2: boolean, param3: boolean): number;
				public accumulatePersistedEvents(param0: java.util.List<com.facebook.appevents.AppEvent>): void;
				public getAccumulatedEventCount(): number;
				public getEventsToPersist(): java.util.List<com.facebook.appevents.AppEvent>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class UserDataStore {
				public static class: java.lang.Class<com.facebook.appevents.UserDataStore>;
				public static EMAIL: string;
				public static FIRST_NAME: string;
				public static LAST_NAME: string;
				public static PHONE: string;
				public static DATE_OF_BIRTH: string;
				public static GENDER: string;
				public static CITY: string;
				public static STATE: string;
				public static ZIP: string;
				public static COUNTRY: string;
				public static removeRules(param0: java.util.List<string>): void;
				public static getAllHashedUserData(): string;
				public static getInternalHashedUserData(): java.util.Map<string,string>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module aam {
				export class MetadataIndexer {
					public static class: java.lang.Class<com.facebook.appevents.aam.MetadataIndexer>;
					public constructor();
					public static enable(): void;
					public static onActivityResumed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module aam {
				export class MetadataMatcher {
					public static class: java.lang.Class<com.facebook.appevents.aam.MetadataMatcher>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module aam {
				export class MetadataRule {
					public static class: java.lang.Class<com.facebook.appevents.aam.MetadataRule>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module aam {
				export class MetadataViewObserver {
					public static class: java.lang.Class<com.facebook.appevents.aam.MetadataViewObserver>;
					public onGlobalFocusChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class CodelessLoggingEventListener {
					public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener>;
					public constructor();
					public static getOnItemClickListener(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.widget.AdapterView): com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnItemClickListener;
					public static getOnClickListener(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnClickListener;
				}
				export module CodelessLoggingEventListener {
					export class AutoLoggingOnClickListener {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnClickListener>;
						public getSupportCodelessLogging(): boolean;
						public onClick(param0: globalAndroid.view.View): void;
					}
					export class AutoLoggingOnItemClickListener {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingOnItemClickListener>;
						public getSupportCodelessLogging(): boolean;
						public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class CodelessManager {
					public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessManager>;
					public static disable(): void;
					public constructor();
					public static enable(): void;
					public static onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public static onActivityResumed(param0: globalAndroid.app.Activity): void;
					public static onActivityPaused(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class CodelessMatcher {
					public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher>;
					public add(param0: globalAndroid.app.Activity): void;
					public remove(param0: globalAndroid.app.Activity): void;
					public static getParameters(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): globalAndroid.os.Bundle;
					public static getInstance(): com.facebook.appevents.codeless.CodelessMatcher;
					public destroy(param0: globalAndroid.app.Activity): void;
				}
				export module CodelessMatcher {
					export class MatchedView {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
						public constructor(param0: globalAndroid.view.View, param1: string);
						public getView(): globalAndroid.view.View;
						public getViewMapKey(): string;
					}
					export class ViewMatcher {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.ViewMatcher>;
						public run(): void;
						public onScrollChanged(): void;
						public onGlobalLayout(): void;
						public static findViewByPath(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, param3: number, param4: number, param5: string): java.util.List<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
						public findView(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View): void;
						public constructor(param0: globalAndroid.view.View, param1: globalAndroid.os.Handler, param2: java.util.HashSet<string>, param3: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class RCTCodelessLoggingEventListener {
					public static class: java.lang.Class<com.facebook.appevents.codeless.RCTCodelessLoggingEventListener>;
					public static getOnTouchListener(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): com.facebook.appevents.codeless.RCTCodelessLoggingEventListener.AutoLoggingOnTouchListener;
					public constructor();
				}
				export module RCTCodelessLoggingEventListener {
					export class AutoLoggingOnTouchListener {
						public static class: java.lang.Class<com.facebook.appevents.codeless.RCTCodelessLoggingEventListener.AutoLoggingOnTouchListener>;
						public getSupportCodelessLogging(): boolean;
						public constructor(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View);
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class ViewIndexer {
					public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexer>;
					public unschedule(): void;
					public static buildAppIndexingRequest(param0: string, param1: com.facebook.AccessToken, param2: string, param3: string): com.facebook.GraphRequest;
					public static sendToServerUnityInstance(param0: string): void;
					/** @deprecated */
					public sendToServerUnity(param0: string): void;
					public constructor(param0: globalAndroid.app.Activity);
					public schedule(): void;
				}
				export module ViewIndexer {
					export class ScreenshotTaker extends java.util.concurrent.Callable<string> {
						public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexer.ScreenshotTaker>;
						public call(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class ViewIndexingTrigger {
					public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexingTrigger>;
					public setOnShakeListener(param0: com.facebook.appevents.codeless.ViewIndexingTrigger.OnShakeListener): void;
					public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
					public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
				}
				export module ViewIndexingTrigger {
					export class OnShakeListener {
						public static class: java.lang.Class<com.facebook.appevents.codeless.ViewIndexingTrigger.OnShakeListener>;
						/**
						 * Constructs a new instance of the com.facebook.appevents.codeless.ViewIndexingTrigger$OnShakeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onShake(): void;
						});
						public constructor();
						public onShake(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class Constants {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.Constants>;
						public static MAX_TREE_DEPTH: number;
						public static IS_CODELESS_EVENT_KEY: string;
						public static EVENT_MAPPING_PATH_TYPE_KEY: string;
						public static PATH_TYPE_RELATIVE: string;
						public static PATH_TYPE_ABSOLUTE: string;
						public static PLATFORM: string;
						public static APP_INDEXING_SCHEDULE_INTERVAL_MS: number;
						public static APP_INDEXING_ENABLED: string;
						public static DEVICE_SESSION_ID: string;
						public static EXTINFO: string;
						public static APP_INDEXING: string;
						public static BUTTON_SAMPLING: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class EventBinding {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding>;
						public getViewParameters(): java.util.List<com.facebook.appevents.codeless.internal.ParameterComponent>;
						public getAppVersion(): string;
						public getActivityName(): string;
						public static getInstanceFromJson(param0: org.json.JSONObject): com.facebook.appevents.codeless.internal.EventBinding;
						public getEventName(): string;
						public static parseArray(param0: org.json.JSONArray): java.util.List<com.facebook.appevents.codeless.internal.EventBinding>;
						public getMethod(): com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
						public getViewPath(): java.util.List<com.facebook.appevents.codeless.internal.PathComponent>;
						public getComponentId(): string;
						public constructor(param0: string, param1: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod, param2: com.facebook.appevents.codeless.internal.EventBinding.ActionType, param3: string, param4: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, param5: java.util.List<com.facebook.appevents.codeless.internal.ParameterComponent>, param6: string, param7: string, param8: string);
						public getPathType(): string;
						public getType(): com.facebook.appevents.codeless.internal.EventBinding.ActionType;
					}
					export module EventBinding {
						export class ActionType {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.ActionType>;
							public static CLICK: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static SELECTED: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static TEXT_CHANGED: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static valueOf(param0: string): com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static values(): native.Array<com.facebook.appevents.codeless.internal.EventBinding.ActionType>;
						}
						export class MappingMethod {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.MappingMethod>;
							public static MANUAL: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
							public static INFERENCE: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
							public static values(): native.Array<com.facebook.appevents.codeless.internal.EventBinding.MappingMethod>;
							public static valueOf(param0: string): com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class ParameterComponent {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ParameterComponent>;
						public name: string;
						public value: string;
						public path: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>;
						public pathType: string;
						public constructor(param0: org.json.JSONObject);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class PathComponent {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent>;
						public className: string;
						public index: number;
						public id: number;
						public text: string;
						public tag: string;
						public description: string;
						public hint: string;
						public matchBitmask: number;
					}
					export module PathComponent {
						export class MatchBitmaskType {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType>;
							public static ID: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static TEXT: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static TAG: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static DESCRIPTION: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static HINT: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static valueOf(param0: string): com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public getValue(): number;
							public static values(): native.Array<com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class SensitiveUserDataUtils {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.SensitiveUserDataUtils>;
						public constructor();
						public static isSensitiveUserData(param0: globalAndroid.view.View): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class UnityReflection {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.UnityReflection>;
						public constructor();
						public static captureViewHierarchy(): void;
						public static sendMessage(param0: string, param1: string, param2: string): void;
						public static sendEventMapping(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class ViewHierarchy {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ViewHierarchy>;
						public constructor();
						public static getDictionaryOfView(param0: globalAndroid.view.View): org.json.JSONObject;
						public static isRCTTextView(param0: globalAndroid.view.View): boolean;
						public static getClassTypeBitmask(param0: globalAndroid.view.View): number;
						public static getTextOfView(param0: globalAndroid.view.View): string;
						public static getExistingOnClickListener(param0: globalAndroid.view.View): globalAndroid.view.View.OnClickListener;
						public static getExistingOnTouchListener(param0: globalAndroid.view.View): globalAndroid.view.View.OnTouchListener;
						public static isRCTViewGroup(param0: globalAndroid.view.View): boolean;
						public static isRCTButton(param0: globalAndroid.view.View, param1: globalAndroid.view.View): boolean;
						public static setOnClickListener(param0: globalAndroid.view.View, param1: globalAndroid.view.View.OnClickListener): void;
						public static updateBasicInfoOfView(param0: globalAndroid.view.View, param1: org.json.JSONObject): void;
						public static isRCTRootView(param0: globalAndroid.view.View): boolean;
						public static getChildrenOfView(param0: globalAndroid.view.View): java.util.List<globalAndroid.view.View>;
						public static getParentOfView(param0: globalAndroid.view.View): globalAndroid.view.ViewGroup;
						public static getHintOfView(param0: globalAndroid.view.View): string;
						public static findRCTRootView(param0: globalAndroid.view.View): globalAndroid.view.View;
						public static getTouchReactView(param0: native.Array<number>, param1: globalAndroid.view.View): globalAndroid.view.View;
						public static updateAppearanceOfView(param0: globalAndroid.view.View, param1: org.json.JSONObject, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module eventdeactivation {
				export class EventDeactivationManager {
					public static class: java.lang.Class<com.facebook.appevents.eventdeactivation.EventDeactivationManager>;
					public static processEvents(param0: java.util.List<com.facebook.appevents.AppEvent>): void;
					public constructor();
					public static processDeprecatedParameters(param0: java.util.Map<string,string>, param1: string): void;
					public static enable(): void;
				}
				export module EventDeactivationManager {
					export class DeprecatedParamFilter {
						public static class: java.lang.Class<com.facebook.appevents.eventdeactivation.EventDeactivationManager.DeprecatedParamFilter>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class ActivityLifecycleTracker {
					public static class: java.lang.Class<com.facebook.appevents.internal.ActivityLifecycleTracker>;
					public static isInBackground(): boolean;
					public static getCurrentSessionGuid(): java.util.UUID;
					public constructor();
					public static isTracking(): boolean;
					public static startTracking(param0: globalAndroid.app.Application, param1: string): void;
					public static getCurrentActivity(): globalAndroid.app.Activity;
					public static onActivityCreated(param0: globalAndroid.app.Activity): void;
					public static onActivityResumed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class AppEventUtility {
					public static class: java.lang.Class<com.facebook.appevents.internal.AppEventUtility>;
					public static assertIsNotMainThread(): void;
					public constructor();
					public static getAppVersion(): string;
					public static assertIsMainThread(): void;
					public static normalizePrice(param0: string): number;
					public static bytesToHex(param0: native.Array<number>): string;
					public static isEmulator(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class AppEventsLoggerUtility {
					public static class: java.lang.Class<com.facebook.appevents.internal.AppEventsLoggerUtility>;
					public constructor();
					public static getJSONObjectForGraphAPICall(param0: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType, param1: com.facebook.internal.AttributionIdentifiers, param2: string, param3: boolean, param4: globalAndroid.content.Context): org.json.JSONObject;
				}
				export module AppEventsLoggerUtility {
					export class GraphAPIActivityType {
						public static class: java.lang.Class<com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType>;
						public static MOBILE_INSTALL_EVENT: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
						public static CUSTOM_APP_EVENTS: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
						public static valueOf(param0: string): com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
						public static values(): native.Array<com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class AutomaticAnalyticsLogger {
					public static class: java.lang.Class<com.facebook.appevents.internal.AutomaticAnalyticsLogger>;
					public constructor();
					public static isImplicitPurchaseLoggingEnabled(): boolean;
					public static logActivateAppEvent(): void;
					public static logActivityTimeSpentEvent(param0: string, param1: number): void;
				}
				export module AutomaticAnalyticsLogger {
					export class PurchaseLoggingParameters {
						public static class: java.lang.Class<com.facebook.appevents.internal.AutomaticAnalyticsLogger.PurchaseLoggingParameters>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class Constants {
					public static class: java.lang.Class<com.facebook.appevents.internal.Constants>;
					public static LOG_TIME_APP_EVENT_KEY: string;
					public static EVENT_NAME_EVENT_KEY: string;
					public static EVENT_NAME_MD5_EVENT_KEY: string;
					public static AA_TIME_SPENT_EVENT_NAME: string;
					public static AA_TIME_SPENT_SCREEN_PARAMETER_NAME: string;
					public static IAP_PRODUCT_ID: string;
					public static IAP_PURCHASE_TIME: string;
					public static IAP_PURCHASE_TOKEN: string;
					public static IAP_PRODUCT_TYPE: string;
					public static IAP_PRODUCT_TITLE: string;
					public static IAP_PRODUCT_DESCRIPTION: string;
					public static IAP_PACKAGE_NAME: string;
					public static IAP_SUBSCRIPTION_AUTORENEWING: string;
					public static IAP_SUBSCRIPTION_PERIOD: string;
					public static IAP_FREE_TRIAL_PERIOD: string;
					public static IAP_INTRO_PRICE_AMOUNT_MICROS: string;
					public static IAP_INTRO_PRICE_CYCLES: string;
					public static EVENT_PARAM_PRODUCT_ITEM_ID: string;
					public static EVENT_PARAM_PRODUCT_AVAILABILITY: string;
					public static EVENT_PARAM_PRODUCT_CONDITION: string;
					public static EVENT_PARAM_PRODUCT_DESCRIPTION: string;
					public static EVENT_PARAM_PRODUCT_IMAGE_LINK: string;
					public static EVENT_PARAM_PRODUCT_LINK: string;
					public static EVENT_PARAM_PRODUCT_TITLE: string;
					public static EVENT_PARAM_PRODUCT_GTIN: string;
					public static EVENT_PARAM_PRODUCT_MPN: string;
					public static EVENT_PARAM_PRODUCT_BRAND: string;
					public static EVENT_PARAM_PRODUCT_PRICE_AMOUNT: string;
					public static EVENT_PARAM_PRODUCT_PRICE_CURRENCY: string;
					public static getDefaultAppEventsSessionTimeoutInSeconds(): number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class HashUtils {
					public static class: java.lang.Class<com.facebook.appevents.internal.HashUtils>;
					public static computeChecksum(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class InAppPurchaseActivityLifecycleTracker {
					public static class: java.lang.Class<com.facebook.appevents.internal.InAppPurchaseActivityLifecycleTracker>;
					public constructor();
					public static update(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class InAppPurchaseEventManager {
					public static class: java.lang.Class<com.facebook.appevents.internal.InAppPurchaseEventManager>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SessionInfo {
					public static class: java.lang.Class<com.facebook.appevents.internal.SessionInfo>;
					public getSourceApplicationInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
					public static getStoredSessionInfo(): com.facebook.appevents.internal.SessionInfo;
					public getInterruptionCount(): number;
					public getSessionId(): java.util.UUID;
					public static clearSavedSessionFromDisk(): void;
					public incrementInterruptionCount(): void;
					public getDiskRestoreTime(): number;
					public setSourceApplicationInfo(param0: com.facebook.appevents.internal.SourceApplicationInfo): void;
					public writeSessionToDisk(): void;
					public getSessionLastEventTime(): java.lang.Long;
					public setSessionLastEventTime(param0: java.lang.Long): void;
					public getSessionLength(): number;
					public getSessionStartTime(): java.lang.Long;
					public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: java.util.UUID);
					public constructor(param0: java.lang.Long, param1: java.lang.Long);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SessionLogger {
					public static class: java.lang.Class<com.facebook.appevents.internal.SessionLogger>;
					public static logDeactivateApp(param0: string, param1: com.facebook.appevents.internal.SessionInfo, param2: string): void;
					public static logActivateApp(param0: string, param1: com.facebook.appevents.internal.SourceApplicationInfo, param2: string, param3: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SourceApplicationInfo {
					public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo>;
					public writeSourceApplicationInfoToDisk(): void;
					public toString(): string;
					public static clearSavedSourceApplicationInfoFromDisk(): void;
					public getCallingApplicationPackage(): string;
					public static getStoredSourceApplicatioInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
					public isOpenedByAppLink(): boolean;
				}
				export module SourceApplicationInfo {
					export class Factory {
						public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo.Factory>;
						public constructor();
						public static create(param0: globalAndroid.app.Activity): com.facebook.appevents.internal.SourceApplicationInfo;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class ViewHierarchyConstants {
					public static class: java.lang.Class<com.facebook.appevents.internal.ViewHierarchyConstants>;
					public static ID_KEY: string;
					public static CLASS_NAME_KEY: string;
					public static CLASS_TYPE_BITMASK_KEY: string;
					public static TEXT_KEY: string;
					public static DESC_KEY: string;
					public static DIMENSION_KEY: string;
					public static IS_USER_INPUT_KEY: string;
					public static TAG_KEY: string;
					public static CHILDREN_VIEW_KEY: string;
					public static HINT_KEY: string;
					public static DIMENSION_TOP_KEY: string;
					public static DIMENSION_LEFT_KEY: string;
					public static DIMENSION_WIDTH_KEY: string;
					public static DIMENSION_HEIGHT_KEY: string;
					public static DIMENSION_SCROLL_X_KEY: string;
					public static DIMENSION_SCROLL_Y_KEY: string;
					public static DIMENSION_VISIBILITY_KEY: string;
					public static TEXT_SIZE: string;
					public static TEXT_IS_BOLD: string;
					public static TEXT_IS_ITALIC: string;
					public static TEXT_STYLE: string;
					public static ICON_BITMAP: string;
					public static INPUT_TYPE_KEY: string;
					public static IS_INTERACTED_KEY: string;
					public static SCREEN_NAME_KEY: string;
					public static VIEW_KEY: string;
					public static ENGLISH: string;
					public static GERMAN: string;
					public static SPANISH: string;
					public static JAPANESE: string;
					public static VIEW_CONTENT: string;
					public static SEARCH: string;
					public static ADD_TO_CART: string;
					public static ADD_TO_WISHLIST: string;
					public static INITIATE_CHECKOUT: string;
					public static ADD_PAYMENT_INFO: string;
					public static PURCHASE: string;
					public static LEAD: string;
					public static COMPLETE_REGISTRATION: string;
					public static BUTTON_TEXT: string;
					public static PAGE_TITLE: string;
					public static RESOLVED_DOCUMENT_LINK: string;
					public static BUTTON_ID: string;
					public static TEXTVIEW_BITMASK: number;
					public static IMAGEVIEW_BITMASK: number;
					public static BUTTON_BITMASK: number;
					public static CLICKABLE_VIEW_BITMASK: number;
					public static REACT_NATIVE_BUTTON_BITMASK: number;
					public static ADAPTER_VIEW_ITEM_BITMASK: number;
					public static LABEL_BITMASK: number;
					public static INPUT_BITMASK: number;
					public static PICKER_BITMASK: number;
					public static SWITCH_BITMASK: number;
					public static RADIO_GROUP_BITMASK: number;
					public static CHECKBOX_BITMASK: number;
					public static RATINGBAR_BITMASK: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ml {
				export class Model {
					public static class: java.lang.Class<com.facebook.appevents.ml.Model>;
					public static SHOULD_FILTER: string;
				}
				export module Model {
					export class FileDownloadTask extends globalAndroid.os.AsyncTask<string,java.lang.Void,java.lang.Boolean> {
						public static class: java.lang.Class<com.facebook.appevents.ml.Model.FileDownloadTask>;
						public onPostExecute(param0: java.lang.Boolean): void;
						public doInBackground(param0: native.Array<string>): java.lang.Boolean;
					}
					export class Weight {
						public static class: java.lang.Class<com.facebook.appevents.ml.Model.Weight>;
						public shape: native.Array<number>;
						public data: native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ml {
				export class ModelManager {
					public static class: java.lang.Class<com.facebook.appevents.ml.ModelManager>;
					public static MODEL_SUGGESTED_EVENTS: string;
					public static MODEL_ADDRESS_DETECTION: string;
					public static predict(param0: string, param1: native.Array<number>, param2: string): string;
					public constructor();
					public static initialize(): void;
					public static getRuleFile(param0: string): java.io.File;
					public static enablePIIFiltering(): void;
					public static enable(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ml {
				export class Operator {
					public static class: java.lang.Class<com.facebook.appevents.ml.Operator>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module ml {
				export class Utils {
					public static class: java.lang.Class<com.facebook.appevents.ml.Utils>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module restrictivedatafilter {
				export class AddressFilterManager {
					public static class: java.lang.Class<com.facebook.appevents.restrictivedatafilter.AddressFilterManager>;
					public constructor();
					public static processParameters(param0: java.util.Map<string,string>): void;
					public static enable(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module restrictivedatafilter {
				export class RestrictiveDataManager {
					public static class: java.lang.Class<com.facebook.appevents.restrictivedatafilter.RestrictiveDataManager>;
					public constructor();
					public static processParameters(param0: java.util.Map<string,string>, param1: string): void;
					public static enable(): void;
				}
				export module RestrictiveDataManager {
					export class RestrictiveParamFilter {
						public static class: java.lang.Class<com.facebook.appevents.restrictivedatafilter.RestrictiveDataManager.RestrictiveParamFilter>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class FeatureExtractor {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.FeatureExtractor>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class PredictionHistoryManager {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.PredictionHistoryManager>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class SuggestedEventViewHierarchy {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.SuggestedEventViewHierarchy>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class SuggestedEventsManager {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.SuggestedEventsManager>;
					public static isEnabled(): boolean;
					public constructor();
					public static trackActivity(param0: globalAndroid.app.Activity): void;
					public static enable(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class ViewObserver {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewObserver>;
					public onGlobalLayout(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module suggestedevents {
				export class ViewOnClickListener {
					public static class: java.lang.Class<com.facebook.appevents.suggestedevents.ViewOnClickListener>;
					public static OTHER_EVENT: string;
					public onClick(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module core {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.core.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module core {
			export class Core {
				public static class: java.lang.Class<com.facebook.core.Core>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class AnalyticsEvents {
				public static class: java.lang.Class<com.facebook.internal.AnalyticsEvents>;
				public static EVENT_NATIVE_LOGIN_DIALOG_COMPLETE: string;
				public static EVENT_NATIVE_LOGIN_DIALOG_START: string;
				public static EVENT_WEB_LOGIN_COMPLETE: string;
				public static EVENT_FRIEND_PICKER_USAGE: string;
				public static EVENT_PLACE_PICKER_USAGE: string;
				public static EVENT_LOGIN_VIEW_USAGE: string;
				public static EVENT_USER_SETTINGS_USAGE: string;
				public static EVENT_NATIVE_DIALOG_START: string;
				public static EVENT_NATIVE_DIALOG_COMPLETE: string;
				public static PARAMETER_WEB_LOGIN_E2E: string;
				public static PARAMETER_WEB_LOGIN_SWITCHBACK_TIME: string;
				public static PARAMETER_APP_ID: string;
				public static PARAMETER_CALL_ID: string;
				public static PARAMETER_ACTION_ID: string;
				public static PARAMETER_NATIVE_LOGIN_DIALOG_START_TIME: string;
				public static PARAMETER_NATIVE_LOGIN_DIALOG_COMPLETE_TIME: string;
				public static PARAMETER_DIALOG_OUTCOME: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_COMPLETED: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_UNKNOWN: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_CANCELLED: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_FAILED: string;
				public static EVENT_NATIVE_DIALOG_TYPE_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_MESSAGE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_OG_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_OG_MESSAGE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_PHOTO_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_PHOTO_MESSAGE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_VIDEO_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_LIKE: string;
				public static EVENT_LIKE_VIEW_CANNOT_PRESENT_DIALOG: string;
				public static EVENT_LIKE_VIEW_DID_LIKE: string;
				public static EVENT_LIKE_VIEW_DID_PRESENT_DIALOG: string;
				public static EVENT_LIKE_VIEW_DID_PRESENT_FALLBACK: string;
				public static EVENT_LIKE_VIEW_DID_UNLIKE: string;
				public static EVENT_LIKE_VIEW_DID_UNDO_QUICKLY: string;
				public static EVENT_LIKE_VIEW_DIALOG_DID_SUCCEED: string;
				public static EVENT_LIKE_VIEW_ERROR: string;
				public static PARAMETER_LIKE_VIEW_STYLE: string;
				public static PARAMETER_LIKE_VIEW_AUXILIARY_POSITION: string;
				public static PARAMETER_LIKE_VIEW_HORIZONTAL_ALIGNMENT: string;
				public static PARAMETER_LIKE_VIEW_OBJECT_ID: string;
				public static PARAMETER_LIKE_VIEW_OBJECT_TYPE: string;
				public static PARAMETER_LIKE_VIEW_CURRENT_ACTION: string;
				public static PARAMETER_LIKE_VIEW_ERROR_JSON: string;
				public static PARAMETER_SHARE_OUTCOME: string;
				public static PARAMETER_SHARE_OUTCOME_SUCCEEDED: string;
				public static PARAMETER_SHARE_OUTCOME_CANCELLED: string;
				public static PARAMETER_SHARE_OUTCOME_ERROR: string;
				public static PARAMETER_SHARE_OUTCOME_UNKNOWN: string;
				public static PARAMETER_SHARE_ERROR_MESSAGE: string;
				public static PARAMETER_SHARE_DIALOG_SHOW: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_WEB: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_NATIVE: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_AUTOMATIC: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_UNKNOWN: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_TYPE: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_UUID: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_PAGE_ID: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_VIDEO: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_PHOTO: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_STATUS: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_OPENGRAPH: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_UNKNOWN: string;
				public static EVENT_SHARE_RESULT: string;
				public static EVENT_SHARE_DIALOG_SHOW: string;
				public static EVENT_SHARE_MESSENGER_DIALOG_SHOW: string;
				public static EVENT_LIKE_BUTTON_CREATE: string;
				public static EVENT_LOGIN_BUTTON_CREATE: string;
				public static EVENT_SHARE_BUTTON_CREATE: string;
				public static EVENT_SEND_BUTTON_CREATE: string;
				public static EVENT_SHARE_BUTTON_DID_TAP: string;
				public static EVENT_SEND_BUTTON_DID_TAP: string;
				public static EVENT_LIKE_BUTTON_DID_TAP: string;
				public static EVENT_LOGIN_BUTTON_DID_TAP: string;
				public static EVENT_DEVICE_SHARE_BUTTON_CREATE: string;
				public static EVENT_DEVICE_SHARE_BUTTON_DID_TAP: string;
				public static EVENT_SMART_LOGIN_SERVICE: string;
				public static EVENT_SDK_INITIALIZE: string;
				public static PARAMETER_SHARE_MESSENGER_GENERIC_TEMPLATE: string;
				public static PARAMETER_SHARE_MESSENGER_MEDIA_TEMPLATE: string;
				public static PARAMETER_SHARE_MESSENGER_OPEN_GRAPH_MUSIC_TEMPLATE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class AttributionIdentifiers {
				public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers>;
				public static isTrackingLimited(param0: globalAndroid.content.Context): boolean;
				public getAndroidAdvertiserId(): string;
				public getAndroidInstallerPackage(): string;
				public isTrackingLimited(): boolean;
				public getAttributionId(): string;
				public static getCachedIdentifiers(): com.facebook.internal.AttributionIdentifiers;
				public static getAttributionIdentifiers(param0: globalAndroid.content.Context): com.facebook.internal.AttributionIdentifiers;
				public constructor();
			}
			export module AttributionIdentifiers {
				export class GoogleAdInfo {
					public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdInfo>;
					public getAdvertiserId(): string;
					public isTrackingLimited(): boolean;
					public asBinder(): globalAndroid.os.IBinder;
				}
				export class GoogleAdServiceConnection {
					public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdServiceConnection>;
					public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
					public getBinder(): globalAndroid.os.IBinder;
					public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class BoltsMeasurementEventListener {
				public static class: java.lang.Class<com.facebook.internal.BoltsMeasurementEventListener>;
				public static getInstance(param0: globalAndroid.content.Context): com.facebook.internal.BoltsMeasurementEventListener;
				public finalize(): void;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class BundleJSONConverter {
				public static class: java.lang.Class<com.facebook.internal.BundleJSONConverter>;
				public static convertToBundle(param0: org.json.JSONObject): globalAndroid.os.Bundle;
				public static convertToJSON(param0: globalAndroid.os.Bundle): org.json.JSONObject;
				public constructor();
			}
			export module BundleJSONConverter {
				export class Setter {
					public static class: java.lang.Class<com.facebook.internal.BundleJSONConverter.Setter>;
					/**
					 * Constructs a new instance of the com.facebook.internal.BundleJSONConverter$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setOnBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): void;
						setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
					});
					public constructor();
					public setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
					public setOnBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class CallbackManagerImpl extends com.facebook.CallbackManager {
				public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl>;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				public constructor();
				public static registerStaticCallback(param0: number, param1: com.facebook.internal.CallbackManagerImpl.Callback): void;
				public registerCallback(param0: number, param1: com.facebook.internal.CallbackManagerImpl.Callback): void;
				public unregisterCallback(param0: number): void;
			}
			export module CallbackManagerImpl {
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.CallbackManagerImpl$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActivityResult(param0: number, param1: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public onActivityResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				}
				export class RequestCodeOffset {
					public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.RequestCodeOffset>;
					public static Login: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Share: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Message: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Like: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static GameRequest: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static AppGroupCreate: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static AppGroupJoin: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static AppInvite: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static DeviceShare: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static values(): native.Array<com.facebook.internal.CallbackManagerImpl.RequestCodeOffset>;
					public static valueOf(param0: string): com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public toRequestCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookInitProvider {
				public static class: java.lang.Class<com.facebook.internal.FacebookInitProvider>;
				public getType(param0: globalAndroid.net.Uri): string;
				public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
				public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
				public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
				public onCreate(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookRequestErrorClassification {
				public static class: java.lang.Class<com.facebook.internal.FacebookRequestErrorClassification>;
				public static EC_SERVICE_UNAVAILABLE: number;
				public static EC_APP_TOO_MANY_CALLS: number;
				public static EC_RATE: number;
				public static EC_USER_TOO_MANY_CALLS: number;
				public static EC_INVALID_SESSION: number;
				public static EC_INVALID_TOKEN: number;
				public static EC_APP_NOT_INSTALLED: number;
				public static EC_TOO_MANY_USER_ACTION_CALLS: number;
				public static ESC_APP_NOT_INSTALLED: number;
				public static ESC_APP_INACTIVE: number;
				public static KEY_RECOVERY_MESSAGE: string;
				public static KEY_NAME: string;
				public static KEY_OTHER: string;
				public static KEY_TRANSIENT: string;
				public static KEY_LOGIN_RECOVERABLE: string;
				public getLoginRecoverableErrors(): java.util.Map<java.lang.Integer,java.util.Set<java.lang.Integer>>;
				public static getDefaultErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
				public getTransientErrors(): java.util.Map<java.lang.Integer,java.util.Set<java.lang.Integer>>;
				public getOtherErrors(): java.util.Map<java.lang.Integer,java.util.Set<java.lang.Integer>>;
				public classify(param0: number, param1: number, param2: boolean): com.facebook.FacebookRequestError.Category;
				public getRecoveryMessage(param0: com.facebook.FacebookRequestError.Category): string;
				public static createFromJSON(param0: org.json.JSONArray): com.facebook.internal.FacebookRequestErrorClassification;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookSignatureValidator {
				public static class: java.lang.Class<com.facebook.internal.FacebookSignatureValidator>;
				public static validateSignature(param0: globalAndroid.content.Context, param1: string): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FeatureManager {
				public static class: java.lang.Class<com.facebook.internal.FeatureManager>;
				public static isEnabled(param0: com.facebook.internal.FeatureManager.Feature): boolean;
				public static checkFeature(param0: com.facebook.internal.FeatureManager.Feature, param1: com.facebook.internal.FeatureManager.Callback): void;
				public constructor();
			}
			export module FeatureManager {
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.FeatureManager.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.FeatureManager$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompleted(param0: boolean): void;
					});
					public constructor();
					public onCompleted(param0: boolean): void;
				}
				export class Feature {
					public static class: java.lang.Class<com.facebook.internal.FeatureManager.Feature>;
					public static Unknown: com.facebook.internal.FeatureManager.Feature;
					public static Core: com.facebook.internal.FeatureManager.Feature;
					public static AppEvents: com.facebook.internal.FeatureManager.Feature;
					public static CodelessEvents: com.facebook.internal.FeatureManager.Feature;
					public static RestrictiveDataFiltering: com.facebook.internal.FeatureManager.Feature;
					public static AAM: com.facebook.internal.FeatureManager.Feature;
					public static PrivacyProtection: com.facebook.internal.FeatureManager.Feature;
					public static SuggestedEvents: com.facebook.internal.FeatureManager.Feature;
					public static PIIFiltering: com.facebook.internal.FeatureManager.Feature;
					public static EventDeactivation: com.facebook.internal.FeatureManager.Feature;
					public static Instrument: com.facebook.internal.FeatureManager.Feature;
					public static CrashReport: com.facebook.internal.FeatureManager.Feature;
					public static ErrorReport: com.facebook.internal.FeatureManager.Feature;
					public static Login: com.facebook.internal.FeatureManager.Feature;
					public static Share: com.facebook.internal.FeatureManager.Feature;
					public static Places: com.facebook.internal.FeatureManager.Feature;
					public toString(): string;
					public static values(): native.Array<com.facebook.internal.FeatureManager.Feature>;
					public getParent(): com.facebook.internal.FeatureManager.Feature;
					public static valueOf(param0: string): com.facebook.internal.FeatureManager.Feature;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FetchedAppGateKeepersManager {
				public static class: java.lang.Class<com.facebook.internal.FetchedAppGateKeepersManager>;
				public static getGateKeeperForKey(param0: string, param1: string, param2: boolean): boolean;
				public constructor();
			}
			export module FetchedAppGateKeepersManager {
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppGateKeepersManager.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.FetchedAppGateKeepersManager$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompleted(): void;
					});
					public constructor();
					public onCompleted(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FetchedAppSettings {
				public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings>;
				public getErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
				public getSmartLoginMenuIconURL(): string;
				public getEventBindings(): org.json.JSONArray;
				public getSdkUpdateMessage(): string;
				public getRestrictiveDataSetting(): string;
				public getIAPAutomaticLoggingEnabled(): boolean;
				public getCodelessEventsEnabled(): boolean;
				public static getDialogFeatureConfig(param0: string, param1: string, param2: string): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
				public constructor(param0: boolean, param1: string, param2: boolean, param3: number, param4: java.util.EnumSet<com.facebook.internal.SmartLoginOption>, param5: java.util.Map<string,java.util.Map<string,com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>>, param6: boolean, param7: com.facebook.internal.FacebookRequestErrorClassification, param8: string, param9: string, param10: boolean, param11: boolean, param12: org.json.JSONArray, param13: string, param14: boolean, param15: string, param16: string, param17: string);
				public getNuxContent(): string;
				public getSmartLoginOptions(): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
				public getTrackUninstallEnabled(): boolean;
				public getSessionTimeoutInSeconds(): number;
				public getDialogConfigurations(): java.util.Map<string,java.util.Map<string,com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>>;
				public getAutomaticLoggingEnabled(): boolean;
				public getSmartLoginBookmarkIconURL(): string;
				public getSuggestedEventsSetting(): string;
				public getRawAamRules(): string;
				public supportsImplicitLogging(): boolean;
				public getNuxEnabled(): boolean;
			}
			export module FetchedAppSettings {
				export class DialogFeatureConfig {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>;
					public static parseDialogConfig(param0: org.json.JSONObject): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
					public getVersionSpec(): native.Array<number>;
					public getFeatureName(): string;
					public getFallbackUrl(): globalAndroid.net.Uri;
					public getDialogName(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FetchedAppSettingsManager {
				public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager>;
				public static getAppSettingsAsync(param0: com.facebook.internal.FetchedAppSettingsManager.FetchedAppSettingsCallback): void;
				public static getAppSettingsWithoutQuery(param0: string): com.facebook.internal.FetchedAppSettings;
				public static setIsUnityInit(param0: boolean): void;
				public static loadAppSettingsAsync(): void;
				public static queryAppSettings(param0: string, param1: boolean): com.facebook.internal.FetchedAppSettings;
				public constructor();
			}
			export module FetchedAppSettingsManager {
				export class FetchAppSettingState {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState>;
					public static NOT_LOADED: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
					public static LOADING: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
					public static SUCCESS: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
					public static ERROR: com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
					public static values(): native.Array<com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState>;
					public static valueOf(param0: string): com.facebook.internal.FetchedAppSettingsManager.FetchAppSettingState;
				}
				export class FetchedAppSettingsCallback {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager.FetchedAppSettingsCallback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.FetchedAppSettingsManager$FetchedAppSettingsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: com.facebook.internal.FetchedAppSettings): void;
						onError(): void;
					});
					public constructor();
					public onSuccess(param0: com.facebook.internal.FetchedAppSettings): void;
					public onError(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FileLruCache {
				public static class: java.lang.Class<com.facebook.internal.FileLruCache>;
				public get(param0: string, param1: string): java.io.InputStream;
				public constructor(param0: string, param1: com.facebook.internal.FileLruCache.Limits);
				public openPutStream(param0: string, param1: string): java.io.OutputStream;
				public getLocation(): string;
				public get(param0: string): java.io.InputStream;
				public interceptAndPut(param0: string, param1: java.io.InputStream): java.io.InputStream;
				public toString(): string;
				public clearCache(): void;
				public openPutStream(param0: string): java.io.OutputStream;
			}
			export module FileLruCache {
				export class BufferFile {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.BufferFile>;
				}
				export class CloseCallbackOutputStream {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.CloseCallbackOutputStream>;
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public write(param0: native.Array<number>): void;
					public close(): void;
					public flush(): void;
					public write(param0: number): void;
				}
				export class CopyingInputStream {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.CopyingInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public reset(): void;
					public markSupported(): boolean;
					public read(param0: native.Array<number>): number;
					public close(): void;
					public skip(param0: number): number;
					public mark(param0: number): void;
				}
				export class Limits {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.Limits>;
					public constructor();
				}
				export class ModifiedFile extends java.lang.Comparable<com.facebook.internal.FileLruCache.ModifiedFile> {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.ModifiedFile>;
					public equals(param0: any): boolean;
					public compareTo(param0: com.facebook.internal.FileLruCache.ModifiedFile): number;
					public hashCode(): number;
				}
				export class StreamCloseCallback {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.StreamCloseCallback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.FileLruCache$StreamCloseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClose(): void;
					});
					public constructor();
					public onClose(): void;
				}
				export class StreamHeader {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.StreamHeader>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageDownloader {
				public static class: java.lang.Class<com.facebook.internal.ImageDownloader>;
				public static downloadAsync(param0: com.facebook.internal.ImageRequest): void;
				public static cancelRequest(param0: com.facebook.internal.ImageRequest): boolean;
				public static clearCache(param0: globalAndroid.content.Context): void;
				public static prioritizeRequest(param0: com.facebook.internal.ImageRequest): void;
				public constructor();
			}
			export module ImageDownloader {
				export class CacheReadWorkItem {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.CacheReadWorkItem>;
					public run(): void;
				}
				export class DownloadImageWorkItem {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.DownloadImageWorkItem>;
					public run(): void;
				}
				export class DownloaderContext {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.DownloaderContext>;
				}
				export class RequestKey {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.RequestKey>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageRequest {
				public static class: java.lang.Class<com.facebook.internal.ImageRequest>;
				public static UNSPECIFIED_DIMENSION: number;
				public static getProfilePictureUri(param0: string, param1: number, param2: number): globalAndroid.net.Uri;
				public getContext(): globalAndroid.content.Context;
				public getImageUri(): globalAndroid.net.Uri;
				public getCallerTag(): any;
				public getCallback(): com.facebook.internal.ImageRequest.Callback;
				public isCachedRedirectAllowed(): boolean;
				public static getProfilePictureUri(param0: string, param1: number, param2: number, param3: string): globalAndroid.net.Uri;
			}
			export module ImageRequest {
				export class Builder {
					public static class: java.lang.Class<com.facebook.internal.ImageRequest.Builder>;
					public setCallback(param0: com.facebook.internal.ImageRequest.Callback): com.facebook.internal.ImageRequest.Builder;
					public setCallerTag(param0: any): com.facebook.internal.ImageRequest.Builder;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri);
					public setAllowCachedRedirects(param0: boolean): com.facebook.internal.ImageRequest.Builder;
					public build(): com.facebook.internal.ImageRequest;
				}
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.ImageRequest.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.ImageRequest$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompleted(param0: com.facebook.internal.ImageResponse): void;
					});
					public constructor();
					public onCompleted(param0: com.facebook.internal.ImageResponse): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageResponse {
				public static class: java.lang.Class<com.facebook.internal.ImageResponse>;
				public getRequest(): com.facebook.internal.ImageRequest;
				public isCachedRedirect(): boolean;
				public getBitmap(): globalAndroid.graphics.Bitmap;
				public getError(): java.lang.Exception;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageResponseCache {
				public static class: java.lang.Class<com.facebook.internal.ImageResponseCache>;
			}
			export module ImageResponseCache {
				export class BufferedHttpInputStream {
					public static class: java.lang.Class<com.facebook.internal.ImageResponseCache.BufferedHttpInputStream>;
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class InstallReferrerUtil {
				public static class: java.lang.Class<com.facebook.internal.InstallReferrerUtil>;
				public static tryUpdateReferrerInfo(param0: com.facebook.internal.InstallReferrerUtil.Callback): void;
			}
			export module InstallReferrerUtil {
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.InstallReferrerUtil.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.InstallReferrerUtil$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReceiveReferrerUrl(param0: string): void;
					});
					public constructor();
					public onReceiveReferrerUrl(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class InternalSettings {
				public static class: java.lang.Class<com.facebook.internal.InternalSettings>;
				public static getCustomUserAgent(): string;
				public static isUnityApp(): boolean;
				public constructor();
				public static setCustomUserAgent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class LockOnGetVariable<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.internal.LockOnGetVariable<any>>;
				public constructor(param0: T);
				public getValue(): T;
				public constructor(param0: java.util.concurrent.Callable<T>);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Logger {
				public static class: java.lang.Class<com.facebook.internal.Logger>;
				public static LOG_TAG_BASE: string;
				public getContents(): string;
				public append(param0: string): void;
				public logString(param0: string): void;
				public static log(param0: com.facebook.LoggingBehavior, param1: number, param2: string, param3: string): void;
				public static registerAccessToken(param0: string): void;
				public getPriority(): number;
				public static registerStringToReplace(param0: string, param1: string): void;
				public static log(param0: com.facebook.LoggingBehavior, param1: number, param2: string, param3: string, param4: native.Array<any>): void;
				public constructor(param0: com.facebook.LoggingBehavior, param1: string);
				public static log(param0: com.facebook.LoggingBehavior, param1: string, param2: string): void;
				public append(param0: string, param1: native.Array<any>): void;
				public setPriority(param0: number): void;
				public appendKeyValue(param0: string, param1: any): void;
				public static log(param0: com.facebook.LoggingBehavior, param1: string, param2: string, param3: native.Array<any>): void;
				public log(): void;
				public append(param0: java.lang.StringBuilder): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class NativeAppCallAttachmentStore {
				public static class: java.lang.Class<com.facebook.internal.NativeAppCallAttachmentStore>;
				public static cleanupAllAttachments(): void;
				public static createAttachment(param0: java.util.UUID, param1: globalAndroid.graphics.Bitmap): com.facebook.internal.NativeAppCallAttachmentStore.Attachment;
				public static createAttachment(param0: java.util.UUID, param1: globalAndroid.net.Uri): com.facebook.internal.NativeAppCallAttachmentStore.Attachment;
				public static addAttachments(param0: java.util.Collection<com.facebook.internal.NativeAppCallAttachmentStore.Attachment>): void;
				public static cleanupAttachmentsForCall(param0: java.util.UUID): void;
				public static openAttachment(param0: java.util.UUID, param1: string): java.io.File;
			}
			export module NativeAppCallAttachmentStore {
				export class Attachment {
					public static class: java.lang.Class<com.facebook.internal.NativeAppCallAttachmentStore.Attachment>;
					public getOriginalUri(): globalAndroid.net.Uri;
					public getAttachmentUrl(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class NativeProtocol {
				public static class: java.lang.Class<com.facebook.internal.NativeProtocol>;
				public static NO_PROTOCOL_AVAILABLE: number;
				public static FACEBOOK_PROXY_AUTH_PERMISSIONS_KEY: string;
				public static FACEBOOK_PROXY_AUTH_APP_ID_KEY: string;
				public static FACEBOOK_PROXY_AUTH_E2E_KEY: string;
				public static FACEBOOK_SDK_VERSION_KEY: string;
				public static PROTOCOL_VERSION_20121101: number;
				public static PROTOCOL_VERSION_20130502: number;
				public static PROTOCOL_VERSION_20130618: number;
				public static PROTOCOL_VERSION_20131107: number;
				public static PROTOCOL_VERSION_20140204: number;
				public static PROTOCOL_VERSION_20140324: number;
				public static PROTOCOL_VERSION_20140701: number;
				public static PROTOCOL_VERSION_20141001: number;
				public static PROTOCOL_VERSION_20141028: number;
				public static PROTOCOL_VERSION_20141107: number;
				public static PROTOCOL_VERSION_20141218: number;
				public static PROTOCOL_VERSION_20160327: number;
				public static PROTOCOL_VERSION_20170213: number;
				public static PROTOCOL_VERSION_20170411: number;
				public static PROTOCOL_VERSION_20170417: number;
				public static PROTOCOL_VERSION_20171115: number;
				public static EXTRA_PROTOCOL_VERSION: string;
				public static EXTRA_PROTOCOL_ACTION: string;
				public static EXTRA_PROTOCOL_CALL_ID: string;
				public static EXTRA_GET_INSTALL_DATA_PACKAGE: string;
				public static EXTRA_PROTOCOL_BRIDGE_ARGS: string;
				public static EXTRA_PROTOCOL_METHOD_ARGS: string;
				public static EXTRA_PROTOCOL_METHOD_RESULTS: string;
				public static BRIDGE_ARG_APP_NAME_STRING: string;
				public static BRIDGE_ARG_ACTION_ID_STRING: string;
				public static BRIDGE_ARG_ERROR_BUNDLE: string;
				public static EXTRA_DIALOG_COMPLETE_KEY: string;
				public static EXTRA_DIALOG_COMPLETION_GESTURE_KEY: string;
				public static RESULT_ARGS_DIALOG_COMPLETE_KEY: string;
				public static RESULT_ARGS_DIALOG_COMPLETION_GESTURE_KEY: string;
				public static MESSAGE_GET_ACCESS_TOKEN_REQUEST: number;
				public static MESSAGE_GET_ACCESS_TOKEN_REPLY: number;
				public static MESSAGE_GET_INSTALL_DATA_REQUEST: number;
				public static MESSAGE_GET_INSTALL_DATA_REPLY: number;
				public static MESSAGE_GET_LIKE_STATUS_REQUEST: number;
				public static MESSAGE_GET_LIKE_STATUS_REPLY: number;
				public static MESSAGE_GET_AK_SEAMLESS_TOKEN_REQUEST: number;
				public static MESSAGE_GET_AK_SEAMLESS_TOKEN_REPLY: number;
				public static MESSAGE_GET_LOGIN_STATUS_REQUEST: number;
				public static MESSAGE_GET_LOGIN_STATUS_REPLY: number;
				public static ACTION_FEED_DIALOG: string;
				public static ACTION_MESSAGE_DIALOG: string;
				public static ACTION_OGACTIONPUBLISH_DIALOG: string;
				public static ACTION_OGMESSAGEPUBLISH_DIALOG: string;
				public static ACTION_LIKE_DIALOG: string;
				public static ACTION_APPINVITE_DIALOG: string;
				public static ACTION_CAMERA_EFFECT: string;
				public static ACTION_SHARE_STORY: string;
				public static EXTRA_PERMISSIONS: string;
				public static EXTRA_APPLICATION_ID: string;
				public static EXTRA_APPLICATION_NAME: string;
				public static EXTRA_USER_ID: string;
				public static EXTRA_LOGGER_REF: string;
				public static EXTRA_TOAST_DURATION_MS: string;
				public static EXTRA_GRAPH_API_VERSION: string;
				public static EXTRA_ACCESS_TOKEN: string;
				public static EXTRA_EXPIRES_SECONDS_SINCE_EPOCH: string;
				public static EXTRA_DATA_ACCESS_EXPIRATION_TIME: string;
				public static RESULT_ARGS_ACCESS_TOKEN: string;
				public static RESULT_ARGS_GRAPH_DOMAIN: string;
				public static RESULT_ARGS_SIGNED_REQUEST: string;
				public static RESULT_ARGS_EXPIRES_SECONDS_SINCE_EPOCH: string;
				public static RESULT_ARGS_PERMISSIONS: string;
				public static EXTRA_ARGS_PROFILE: string;
				public static EXTRA_ARGS_PROFILE_NAME: string;
				public static EXTRA_ARGS_PROFILE_LAST_NAME: string;
				public static EXTRA_ARGS_PROFILE_FIRST_NAME: string;
				public static EXTRA_ARGS_PROFILE_MIDDLE_NAME: string;
				public static EXTRA_ARGS_PROFILE_LINK: string;
				public static EXTRA_ARGS_PROFILE_USER_ID: string;
				public static OPEN_GRAPH_CREATE_OBJECT_KEY: string;
				public static IMAGE_USER_GENERATED_KEY: string;
				public static IMAGE_URL_KEY: string;
				public static STATUS_ERROR_TYPE: string;
				public static STATUS_ERROR_DESCRIPTION: string;
				public static STATUS_ERROR_CODE: string;
				public static STATUS_ERROR_SUBCODE: string;
				public static STATUS_ERROR_JSON: string;
				public static BRIDGE_ARG_ERROR_TYPE: string;
				public static BRIDGE_ARG_ERROR_DESCRIPTION: string;
				public static BRIDGE_ARG_ERROR_CODE: string;
				public static BRIDGE_ARG_ERROR_SUBCODE: string;
				public static BRIDGE_ARG_ERROR_JSON: string;
				public static ERROR_UNKNOWN_ERROR: string;
				public static ERROR_PROTOCOL_ERROR: string;
				public static ERROR_USER_CANCELED: string;
				public static ERROR_APPLICATION_ERROR: string;
				public static ERROR_NETWORK_ERROR: string;
				public static ERROR_PERMISSION_DENIED: string;
				public static ERROR_SERVICE_DISABLED: string;
				public static WEB_DIALOG_URL: string;
				public static WEB_DIALOG_ACTION: string;
				public static WEB_DIALOG_PARAMS: string;
				public static WEB_DIALOG_IS_FALLBACK: string;
				public static AUDIENCE_ME: string;
				public static AUDIENCE_FRIENDS: string;
				public static AUDIENCE_EVERYONE: string;
				public static createFacebookLiteIntent(param0: globalAndroid.content.Context, param1: string, param2: java.util.Collection<string>, param3: string, param4: boolean, param5: boolean, param6: com.facebook.login.DefaultAudience, param7: string, param8: string): globalAndroid.content.Intent;
				public static createBundleForException(param0: com.facebook.FacebookException): globalAndroid.os.Bundle;
				public static getMethodArgumentsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static createProtocolResultIntent(param0: globalAndroid.content.Intent, param1: globalAndroid.os.Bundle, param2: com.facebook.FacebookException): globalAndroid.content.Intent;
				public static setupProtocolRequestIntent(param0: globalAndroid.content.Intent, param1: string, param2: string, param3: number, param4: globalAndroid.os.Bundle): void;
				public static getCallIdFromIntent(param0: globalAndroid.content.Intent): java.util.UUID;
				public static getBridgeArgumentsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static createTokenRefreshIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
				public static getProtocolVersionFromIntent(param0: globalAndroid.content.Intent): number;
				public static getExceptionFromErrorData(param0: globalAndroid.os.Bundle): com.facebook.FacebookException;
				public static createProxyAuthIntent(param0: globalAndroid.content.Context, param1: string, param2: java.util.Collection<string>, param3: string, param4: boolean, param5: boolean, param6: com.facebook.login.DefaultAudience, param7: string, param8: string): globalAndroid.content.Intent;
				public constructor();
				public static getLatestAvailableProtocolVersionForAction(param0: string, param1: native.Array<number>): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
				public static createPlatformServiceIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
				public static getLatestAvailableProtocolVersionForService(param0: number): number;
				public static isErrorResult(param0: globalAndroid.content.Intent): boolean;
				public static computeLatestAvailableVersionFromVersionSpec(param0: java.util.TreeSet<java.lang.Integer>, param1: number, param2: native.Array<number>): number;
				public static getSuccessResultsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static getErrorDataFromResultIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static isVersionCompatibleWithBucketedIntent(param0: number): boolean;
				public static updateAllAvailableProtocolVersionsAsync(): void;
				public static getLatestKnownVersion(): number;
				public static createPlatformActivityIntent(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult, param4: globalAndroid.os.Bundle): globalAndroid.content.Intent;
			}
			export module NativeProtocol {
				export class EffectTestAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.EffectTestAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
				export class FBLiteAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.FBLiteAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
				export class KatanaAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.KatanaAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
				export class MessengerAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.MessengerAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
				export abstract class NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.NativeAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
					public getAvailableVersions(): java.util.TreeSet<java.lang.Integer>;
				}
				export class ProtocolVersionQueryResult {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult>;
					public static createEmpty(): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
					public getProtocolVersion(): number;
					public static create(param0: com.facebook.internal.NativeProtocol.NativeAppInfo, param1: number): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
					public getAppInfo(): com.facebook.internal.NativeProtocol.NativeAppInfo;
				}
				export class WakizashiAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.WakizashiAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ProfileInformationCache {
				public static class: java.lang.Class<com.facebook.internal.ProfileInformationCache>;
				public static getProfileInformation(param0: string): org.json.JSONObject;
				public static putProfileInformation(param0: string, param1: org.json.JSONObject): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ServerProtocol {
				public static class: java.lang.Class<com.facebook.internal.ServerProtocol>;
				public static DIALOG_PATH: string;
				public static DIALOG_PARAM_ACCESS_TOKEN: string;
				public static DIALOG_PARAM_APP_ID: string;
				public static DIALOG_PARAM_AUTH_TYPE: string;
				public static DIALOG_PARAM_CBT: string;
				public static DIALOG_PARAM_CLIENT_ID: string;
				public static DIALOG_PARAM_DISPLAY: string;
				public static DIALOG_PARAM_DISPLAY_TOUCH: string;
				public static DIALOG_PARAM_E2E: string;
				public static DIALOG_PARAM_IES: string;
				public static DIALOG_PARAM_LEGACY_OVERRIDE: string;
				public static DIALOG_PARAM_REDIRECT_URI: string;
				public static DIALOG_PARAM_RESPONSE_TYPE: string;
				public static DIALOG_PARAM_RETURN_SCOPES: string;
				public static DIALOG_PARAM_SCOPE: string;
				public static DIALOG_PARAM_SSO_DEVICE: string;
				public static DIALOG_PARAM_DEFAULT_AUDIENCE: string;
				public static DIALOG_PARAM_SDK_VERSION: string;
				public static DIALOG_PARAM_STATE: string;
				public static DIALOG_REREQUEST_AUTH_TYPE: string;
				public static DIALOG_RESPONSE_TYPE_TOKEN_AND_SIGNED_REQUEST: string;
				public static DIALOG_RETURN_SCOPES_TRUE: string;
				public static DIALOG_REDIRECT_URI: string;
				public static DIALOG_REDIRECT_CHROME_OS_URI: string;
				public static DIALOG_CANCEL_URI: string;
				public static FALLBACK_DIALOG_PARAM_APP_ID: string;
				public static FALLBACK_DIALOG_PARAM_BRIDGE_ARGS: string;
				public static FALLBACK_DIALOG_PARAM_KEY_HASH: string;
				public static FALLBACK_DIALOG_PARAM_METHOD_ARGS: string;
				public static FALLBACK_DIALOG_PARAM_METHOD_RESULTS: string;
				public static FALLBACK_DIALOG_PARAM_VERSION: string;
				public static FALLBACK_DIALOG_DISPLAY_VALUE_TOUCH: string;
				public static errorsProxyAuthDisabled: java.util.Collection<string>;
				public static errorsUserCanceled: java.util.Collection<string>;
				public static errorConnectionFailure: string;
				public static getGraphUrlBase(): string;
				public static getGraphVideoUrlBase(): string;
				public static getDefaultAPIVersion(): string;
				public static getDialogAuthority(): string;
				public static getQueryParamsForPlatformActivityIntentWebFallback(param0: string, param1: number, param2: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class SmartLoginOption {
				public static class: java.lang.Class<com.facebook.internal.SmartLoginOption>;
				public static None: com.facebook.internal.SmartLoginOption;
				public static Enabled: com.facebook.internal.SmartLoginOption;
				public static RequireConfirm: com.facebook.internal.SmartLoginOption;
				public static ALL: java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
				public static parseOptions(param0: number): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
				public static values(): native.Array<com.facebook.internal.SmartLoginOption>;
				public static valueOf(param0: string): com.facebook.internal.SmartLoginOption;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class UrlRedirectCache {
				public static class: java.lang.Class<com.facebook.internal.UrlRedirectCache>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Utility {
				public static class: java.lang.Class<com.facebook.internal.Utility>;
				public static DEFAULT_STREAM_BUFFER_SIZE: number;
				public static getActivityName(param0: globalAndroid.content.Context): string;
				public static logd(param0: string, param1: string): void;
				public static isWebUri(param0: globalAndroid.net.Uri): boolean;
				public static isCurrentAccessToken(param0: com.facebook.AccessToken): boolean;
				public static getMethodQuietly(param0: string, param1: string, param2: native.Array<java.lang.Class<any>>): java.lang.reflect.Method;
				public static tryGetJSONObjectFromResponse(param0: org.json.JSONObject, param1: string): org.json.JSONObject;
				public static jsonArrayToStringList(param0: org.json.JSONArray): java.util.List<string>;
				public static logd(param0: string, param1: string, param2: java.lang.Throwable): void;
				public static mapToJsonStr(param0: java.util.Map<string,string>): string;
				public static getResourceLocale(): java.util.Locale;
				public static setAppEventExtendedDeviceInfoParameters(param0: org.json.JSONObject, param1: globalAndroid.content.Context): void;
				public constructor();
				public static invokeMethodQuietly(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
				public static filter(param0: java.util.List, param1: com.facebook.internal.Utility.Predicate<any>): java.util.List;
				public static writeStringMapToParcel(param0: globalAndroid.os.Parcel, param1: java.util.Map<string,string>): void;
				public static getMethodQuietly(param0: java.lang.Class<any>, param1: string, param2: native.Array<java.lang.Class<any>>): java.lang.reflect.Method;
				public static getBundleLongAsDate(param0: globalAndroid.os.Bundle, param1: string, param2: java.util.Date): java.util.Date;
				public static putJSONValueInBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): boolean;
				public static putCommaSeparatedStringList(param0: globalAndroid.os.Bundle, param1: string, param2: java.util.List<string>): void;
				public static isSubset(param0: java.util.Collection, param1: java.util.Collection): boolean;
				public static safeGetStringFromResponse(param0: org.json.JSONObject, param1: string): string;
				public static isAutofillAvailable(param0: globalAndroid.content.Context): boolean;
				public static closeQuietly(param0: java.io.Closeable): void;
				public static getContentSize(param0: globalAndroid.net.Uri): number;
				public static intersectRanges(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
				public static clearCaches(param0: globalAndroid.content.Context): void;
				public static runOnNonUiThread(param0: java.lang.Runnable): void;
				public static coerceValueIfNullOrEmpty(param0: string, param1: string): string;
				public static isFileUri(param0: globalAndroid.net.Uri): boolean;
				public static sha256hash(param0: native.Array<number>): string;
				public static arrayList(param0: native.Array<any>): java.util.ArrayList;
				public static md5hash(param0: string): string;
				public static deleteDirectory(param0: java.io.File): void;
				public static handlePermissionResponse(param0: org.json.JSONObject): com.facebook.internal.Utility.PermissionsLists;
				public static getStringPropertyAsJSON(param0: org.json.JSONObject, param1: string, param2: string): any;
				public static sha256hash(param0: string): string;
				public static readStreamToString(param0: java.io.InputStream): string;
				public static copyAndCloseInputStream(param0: java.io.InputStream, param1: java.io.OutputStream): number;
				public static isAutoAppLinkSetup(): boolean;
				public static isNullOrEmpty(param0: java.util.Collection): boolean;
				public static clearFacebookCookies(param0: globalAndroid.content.Context): void;
				public static tryGetJSONArrayFromResponse(param0: org.json.JSONObject, param1: string): org.json.JSONArray;
				public static getCurrentLocale(): java.util.Locale;
				public static mustFixWindowParamsForAutofill(param0: globalAndroid.content.Context): boolean;
				public static parseUrlQueryString(param0: string): globalAndroid.os.Bundle;
				public static setAppEventAttributionParameters(param0: org.json.JSONObject, param1: com.facebook.internal.AttributionIdentifiers, param2: string, param3: boolean): void;
				public static getAppName(param0: globalAndroid.content.Context): string;
				public static logd(param0: string, param1: java.lang.Exception): void;
				public static asListNoNulls(param0: native.Array<any>): java.util.List;
				public static sha1hash(param0: string): string;
				public static map(param0: java.util.List, param1: com.facebook.internal.Utility.Mapper<any,any>): java.util.List;
				public static isContentUri(param0: globalAndroid.net.Uri): boolean;
				public static hasSameId(param0: org.json.JSONObject, param1: org.json.JSONObject): boolean;
				public static readStringMapFromParcel(param0: globalAndroid.os.Parcel): java.util.Map<string,string>;
				public static areObjectsEqual(param0: any, param1: any): boolean;
				public static isChromeOS(param0: globalAndroid.content.Context): boolean;
				public static hashSet(param0: native.Array<any>): java.util.HashSet;
				public static putUri(param0: globalAndroid.os.Bundle, param1: string, param2: globalAndroid.net.Uri): void;
				public static awaitGetGraphMeRequestWithCache(param0: string): org.json.JSONObject;
				public static getMetadataApplicationId(param0: globalAndroid.content.Context): string;
				public static getGraphMeRequestWithCacheAsync(param0: string, param1: com.facebook.internal.Utility.GraphMeRequestWithCacheCallback): void;
				public static getUriString(param0: globalAndroid.net.Uri): string;
				public static convertJSONArrayToList(param0: org.json.JSONArray): java.util.List<string>;
				public static getAppVersion(): string;
				public static disconnectQuietly(param0: java.net.URLConnection): void;
				public static sha1hash(param0: native.Array<number>): string;
				public static stringsEqualOrEmpty(param0: string, param1: string): boolean;
				public static generateRandomString(param0: number): string;
				public static buildUri(param0: string, param1: string, param2: globalAndroid.os.Bundle): globalAndroid.net.Uri;
				public static jsonArrayToSet(param0: org.json.JSONArray): java.util.Set<string>;
				public static isNullOrEmpty(param0: string): boolean;
				public static putNonEmptyString(param0: globalAndroid.os.Bundle, param1: string, param2: string): void;
				public static unmodifiableCollection(param0: native.Array<any>): java.util.Collection;
				public static convertJSONObjectToStringMap(param0: org.json.JSONObject): java.util.Map<string,string>;
				public static JsonStrToMap(param0: string): java.util.Map<string,string>;
			}
			export module Utility {
				export class GraphMeRequestWithCacheCallback {
					public static class: java.lang.Class<com.facebook.internal.Utility.GraphMeRequestWithCacheCallback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.Utility$GraphMeRequestWithCacheCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: org.json.JSONObject): void;
						onFailure(param0: com.facebook.FacebookException): void;
					});
					public constructor();
					public onFailure(param0: com.facebook.FacebookException): void;
					public onSuccess(param0: org.json.JSONObject): void;
				}
				export class Mapper<T, K>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.internal.Utility.Mapper<any,any>>;
					/**
					 * Constructs a new instance of the com.facebook.internal.Utility$Mapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): K;
					});
					public constructor();
					public apply(param0: T): K;
				}
				export class PermissionsLists {
					public static class: java.lang.Class<com.facebook.internal.Utility.PermissionsLists>;
					public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);
					public getDeclinedPermissions(): java.util.List<string>;
					public getGrantedPermissions(): java.util.List<string>;
					public getExpiredPermissions(): java.util.List<string>;
				}
				export class Predicate<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.internal.Utility.Predicate<any>>;
					/**
					 * Constructs a new instance of the com.facebook.internal.Utility$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): boolean;
					});
					public constructor();
					public apply(param0: T): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Validate {
				public static class: java.lang.Class<com.facebook.internal.Validate>;
				public static CUSTOM_TAB_REDIRECT_URI_PREFIX: string;
				public static hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
				public static hasContentProvider(param0: globalAndroid.content.Context): void;
				public static containsNoNullOrEmpty(param0: java.util.Collection<string>, param1: string): void;
				public static oneOf(param0: any, param1: string, param2: native.Array<any>): void;
				public static notEmpty(param0: java.util.Collection, param1: string): void;
				public static hasFacebookActivity(param0: globalAndroid.content.Context, param1: boolean): void;
				public static hasInternetPermissions(param0: globalAndroid.content.Context): void;
				public static hasCustomTabRedirectActivity(param0: globalAndroid.content.Context, param1: string): boolean;
				public static containsNoNulls(param0: java.util.Collection, param1: string): void;
				public static hasWiFiPermission(param0: globalAndroid.content.Context): boolean;
				public constructor();
				public static hasChangeWifiStatePermission(param0: globalAndroid.content.Context): boolean;
				public static runningOnUiThread(): void;
				public static hasFacebookActivity(param0: globalAndroid.content.Context): void;
				public static hasAppID(): string;
				public static hasInternetPermissions(param0: globalAndroid.content.Context, param1: boolean): void;
				public static notNullOrEmpty(param0: string, param1: string): void;
				public static hasBluetoothPermission(param0: globalAndroid.content.Context): boolean;
				public static hasClientToken(): string;
				public static notEmptyAndContainsNoNulls(param0: java.util.Collection, param1: string): void;
				public static sdkInitialized(): void;
				public static hasLocationPermission(param0: globalAndroid.content.Context): boolean;
				public static notNull(param0: any, param1: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class WorkQueue {
				public static class: java.lang.Class<com.facebook.internal.WorkQueue>;
				public static DEFAULT_MAX_CONCURRENT: number;
				public addActiveWorkItem(param0: java.lang.Runnable): com.facebook.internal.WorkQueue.WorkItem;
				public constructor(param0: number);
				public validate(): void;
				public addActiveWorkItem(param0: java.lang.Runnable, param1: boolean): com.facebook.internal.WorkQueue.WorkItem;
				public constructor(param0: number, param1: java.util.concurrent.Executor);
				public constructor();
			}
			export module WorkQueue {
				export class WorkItem {
					public static class: java.lang.Class<com.facebook.internal.WorkQueue.WorkItem>;
					/**
					 * Constructs a new instance of the com.facebook.internal.WorkQueue$WorkItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cancel(): boolean;
						isRunning(): boolean;
						moveToFront(): void;
					});
					public constructor();
					public cancel(): boolean;
					public isRunning(): boolean;
					public moveToFront(): void;
				}
				export class WorkNode extends com.facebook.internal.WorkQueue.WorkItem {
					public static class: java.lang.Class<com.facebook.internal.WorkQueue.WorkNode>;
					public cancel(): boolean;
					public isRunning(): boolean;
					public moveToFront(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export class InstrumentData {
					public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData>;
					public toString(): string;
					public save(): void;
					public compareTo(param0: com.facebook.internal.instrument.InstrumentData): number;
					public isValid(): boolean;
					public getParameters(): org.json.JSONObject;
					public clear(): void;
					public constructor(param0: java.lang.Throwable, param1: com.facebook.internal.instrument.InstrumentData.Type);
					public constructor(param0: java.io.File);
				}
				export module InstrumentData {
					export class Type {
						public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentData.Type>;
						public static CrashReport: com.facebook.internal.instrument.InstrumentData.Type;
						public static CrashShield: com.facebook.internal.instrument.InstrumentData.Type;
						public static ThreadCheck: com.facebook.internal.instrument.InstrumentData.Type;
						public static valueOf(param0: string): com.facebook.internal.instrument.InstrumentData.Type;
						public static values(): native.Array<com.facebook.internal.instrument.InstrumentData.Type>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export class InstrumentManager {
					public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentManager>;
					public static start(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export class InstrumentUtility {
					public static class: java.lang.Class<com.facebook.internal.instrument.InstrumentUtility>;
					public static CRASH_REPORT_PREFIX: string;
					public static ERROR_REPORT_PREFIX: string;
					public static writeFile(param0: string, param1: string): void;
					public constructor();
					public static deleteFile(param0: string): boolean;
					public static getStackTrace(param0: java.lang.Throwable): string;
					public static readFile(param0: string, param1: boolean): org.json.JSONObject;
					public static sendReports(param0: string, param1: org.json.JSONArray, param2: com.facebook.GraphRequest.Callback): void;
					public static listCrashReportFiles(): native.Array<java.io.File>;
					public static getCause(param0: java.lang.Throwable): string;
					public static getInstrumentReportDir(): java.io.File;
					public static isSDKRelatedException(param0: java.lang.Throwable): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module crashreport {
					export class AutoHandleExceptions {
						public static class: java.lang.Class<com.facebook.internal.instrument.crashreport.AutoHandleExceptions>;
						/**
						 * Constructs a new instance of the com.facebook.internal.instrument.crashreport.AutoHandleExceptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module crashreport {
					export class CrashHandler {
						public static class: java.lang.Class<com.facebook.internal.instrument.crashreport.CrashHandler>;
						public static enable(): void;
						public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
						public endApplication(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module crashreport {
					export class CrashShieldHandler {
						public static class: java.lang.Class<com.facebook.internal.instrument.crashreport.CrashShieldHandler>;
						public static methodFinished(param0: any): void;
						public constructor();
						public static isObjectCrashing(param0: any): boolean;
						public static resetCrashingObjects(): void;
						public static reset(): void;
						public static handleThrowable(param0: java.lang.Throwable, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module crashreport {
					export class NoAutoExceptionHandling {
						public static class: java.lang.Class<com.facebook.internal.instrument.crashreport.NoAutoExceptionHandling>;
						/**
						 * Constructs a new instance of the com.facebook.internal.instrument.crashreport.NoAutoExceptionHandling interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module errorreport {
					export class ErrorReportData {
						public static class: java.lang.Class<com.facebook.internal.instrument.errorreport.ErrorReportData>;
						public constructor(param0: java.io.File);
						public compareTo(param0: com.facebook.internal.instrument.errorreport.ErrorReportData): number;
						public getParameters(): org.json.JSONObject;
						public save(): void;
						public clear(): void;
						public toString(): string;
						public constructor(param0: string);
						public isValid(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module errorreport {
					export class ErrorReportHandler {
						public static class: java.lang.Class<com.facebook.internal.instrument.errorreport.ErrorReportHandler>;
						public static save(param0: string): void;
						public static enable(): void;
						public constructor();
						public static listErrorReportFiles(): native.Array<java.io.File>;
						public static sendErrorReports(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module instrument {
				export module threadcheck {
					export class ThreadCheckHandler {
						public static class: java.lang.Class<com.facebook.internal.instrument.threadcheck.ThreadCheckHandler>;
						public static workerThreadViolationDetected(param0: java.lang.Class<any>, param1: string, param2: string): void;
						public static uiThreadViolationDetected(param0: java.lang.Class<any>, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module metrics {
				export class MetricsUtil {
					public static class: java.lang.Class<com.facebook.internal.metrics.MetricsUtil>;
					public startMeasureFor(param0: com.facebook.internal.metrics.Tag): void;
					public stopMeasureFor(param0: com.facebook.internal.metrics.Tag): void;
					public getInstance(param0: globalAndroid.content.Context): com.facebook.internal.metrics.MetricsUtil;
					public getLastTimeDifferenceFor(param0: com.facebook.internal.metrics.Tag): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module metrics {
				export class Tag {
					public static class: java.lang.Class<com.facebook.internal.metrics.Tag>;
					public static FACEBOOK_CORE_STARTUP: com.facebook.internal.metrics.Tag;
					public static valueOf(param0: string): com.facebook.internal.metrics.Tag;
					public getSuffix(): string;
					public static values(): native.Array<com.facebook.internal.metrics.Tag>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export module security {
				export class CertificateUtil {
					public static class: java.lang.Class<com.facebook.internal.security.CertificateUtil>;
					public static getCertificateHash(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class DefaultAudience {
				public static class: java.lang.Class<com.facebook.login.DefaultAudience>;
				public static NONE: com.facebook.login.DefaultAudience;
				public static ONLY_ME: com.facebook.login.DefaultAudience;
				public static FRIENDS: com.facebook.login.DefaultAudience;
				public static EVERYONE: com.facebook.login.DefaultAudience;
				public static values(): native.Array<com.facebook.login.DefaultAudience>;
				public getNativeProtocolAudience(): string;
				public static valueOf(param0: string): com.facebook.login.DefaultAudience;
			}
		}
	}
}
