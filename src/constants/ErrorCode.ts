export enum ErrorCode {
  InvalidCountryCode = 201,
  InvalidRecipientNumber = 202,
  MissingAuthentication = 300,
  MissingParameterTo = 301,
  MissingParameterType = 304,
  MissingParameterText = 305,
  InvalidSender = 306,
  MissingParameterUrl = 307,
  InvalidType = 400,
  ParameterLongExceedsCharLimit = 401,
  PreventedByReloadLock = 402,
  InsufficientCredits = 500,
  CarrierFailed = 600,
  UnknownError = 700,
  MissingLogoFile = 801,
  NonExistingLogoFile = 802,
  MissingRingTone = 803,
  InvalidApiKey = 900,
  InvalidMessageId = 901,
  DeactivatedApi = 902,
  DisallowedIp = 903,
}
