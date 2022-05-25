<?php
    //Response class
    class Response
    {
        //Atributos
        private $code;
        private $message;
        private $data;

        //Constructor
        public function __construct($code=200, $message="", $data=null)
        {
            $this->code = $code;
            $this->message = $message;
            $this->data = $data;
        }

        //Getters
        public function getCode()
        {
            return $this->code;
        }

        public function getMessage()
        {
            return $this->message;
        }

        public function getData()
        {
            return $this->data;
        }

        //Setters
        public function setCode($code)
        {
            $this->code = $code;
        }

        public function setMessage($message)
        {
            $this->message = $message;
        }

        public function setData($data)
        {
            $this->data = $data;
        }

        //ToJSON
        public function toJSON()
        {
            return json_encode(array(
                "code" => $this->code,
                "message" => $this->message,
                "data" => $this->data
            ));
        }

        //Set Response
        public function setResponse($code, $message, $data)
        {
            $this->code = $code;
            $this->message = $message;
            $this->data = $data;
        }

    }
?>