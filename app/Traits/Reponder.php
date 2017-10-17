<?php

namespace App\Traits\Responder;

/**
 *
 */
trait Responder
{
    /**
     * Format to json the response for AJAX
     *
     * @param bool  $success                                flag if the request is a success
     * @param array $extra                                  extra data to pass on
     * @return Illuminate\Http\Response
     * @author glen
     */
    public function jsonify($success, $extra = [])
    {
        return response()->json(array_merge([
            'success' => $success
        ], $extra));
    }

    /**
     * Format error response to json for AJAX requests
     *
     * @param Exception $e                                  the exception object to use
     * @param array $extra                                  the extra data to attach
     * @return Illuminate\Http\Response
     * @author glen
     */
    public function errorify(\Exception $e, $extra = [])
    {
        return $this->jsonify(false, array_merge([
            'message' => $e->getMessage(),
        ], $extra));
    }

    /**
     * Format success response to json for AJAX requests
     *
     * @param string $message                               the message to add
     * @param array $extra                                  extra data to add
     * @return Illuminate\Http\Response
     * @author glen
     */
    public function successify($message, $extra = [])
    {
        return $this->jsonify(true, array_merge([
            'message' => $message,
        ], $extra));
    }
}